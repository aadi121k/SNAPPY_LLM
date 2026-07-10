import { AIModel, Conversation, Message } from '../types';
import { generateId } from '../utils/helpers';

const API_URL = import.meta.env.VITE_API_URL;

interface SendMessageParams {
  content: string;
  conversationId?: string;
  model: AIModel;
}

interface SendMessageResponse {
  message: Message;
  conversationId: string;
}
interface ChatApiResponse {
  response: string;

  images?: {
    title: string;
    image: string;
    author: string;
    link: string;
  }[];
}
export const sendMessage = async (
  params: SendMessageParams
): Promise<SendMessageResponse> => {
  try {
    const res = await fetch(`${API_URL}/chat/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: params.content,
        model: params.model,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data: ChatApiResponse = await res.json();

   const assistantMessage: Message = {
  id: generateId(),
  role: 'assistant',
  content: data.response,
  timestamp: new Date(),
  model: params.model,
  images: data.images || [],
};
    return {
      message: assistantMessage,
      conversationId: params.conversationId || generateId(),
    };
  } catch (error) {
    console.error(error);

    throw new Error(
      'Unable to connect to SNAPPY LLM backend.'
    );
  }
};

export const createConversation = async (
  model: AIModel
): Promise<Conversation> => {
  return {
    id: generateId(),
    title: 'New Conversation',
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    saved: false,
    model,
  };
};

export const getConversations = async (): Promise<Conversation[]> => {
  const stored = localStorage.getItem('snappy-conversations');

  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const deleteConversation = async (
  id: string
): Promise<void> => {
  const stored = localStorage.getItem('snappy-conversations');

  if (!stored) return;

  const conversations = JSON.parse(stored);

  localStorage.setItem(
    'snappy-conversations',
    JSON.stringify(
      conversations.filter((c: Conversation) => c.id !== id)
    )
  );
};

export const updateConversation = async (
  id: string,
  updates: Partial<Conversation>
): Promise<Conversation | null> => {
  const stored = localStorage.getItem('snappy-conversations');

  if (!stored) return null;

  const conversations = JSON.parse(stored);

  const updated = conversations.map((c: Conversation) =>
    c.id === id
      ? {
          ...c,
          ...updates,
          updatedAt: new Date().toISOString(),
        }
      : c
  );

  localStorage.setItem(
    'snappy-conversations',
    JSON.stringify(updated)
  );

  return updated.find((c: Conversation) => c.id === id) || null;
};
export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/chat/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("File upload failed");
  }

  return await res.json();
};

export const apiService = {
  sendMessage,
  uploadFile,
  createConversation,
  getConversations,
  deleteConversation,
  updateConversation,
};
export default apiService;