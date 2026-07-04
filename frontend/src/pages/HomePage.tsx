import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { WelcomeSection } from '../components/home';
import { PromptCardComponent } from '../components/home';
import { Layout } from '../components/layout';
import { useSettings, useChat } from '../contexts';
import { PROMPT_CARDS } from '../utils/constants';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { settings, updateModel } = useSettings();
  const { createNewConversation } = useChat();

  const handlePromptCardClick = async (prompt: string) => {
    const newConv = createNewConversation(settings.model);
    navigate(`/chat/${newConv.id}?prompt=${encodeURIComponent(prompt)}`);
  };

  const handleSendMessage = async (message: string) => {
    const newConv = createNewConversation(settings.model);
    navigate(`/chat/${newConv.id}?message=${encodeURIComponent(message)}`);
  };

  return (
    <Layout model={settings.model} onModelChange={updateModel}>
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
            <WelcomeSection />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4 text-center">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROMPT_CARDS.map((card, index) => (
                  <PromptCardComponent
                    key={card.id}
                    card={card}
                    index={index}
                    onClick={() => handlePromptCardClick(card.prompt)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent pt-8 px-4 pb-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              <textarea
                placeholder="Send a message to Snappy AI..."
                className="w-full px-4 py-3 text-slate-700 placeholder:text-slate-400 bg-transparent resize-none focus:outline-none min-h-[56px] max-h-[200px]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const target = e.target as HTMLTextAreaElement;
                    if (target.value.trim()) {
                      handleSendMessage(target.value);
                    }
                  }
                }}
                rows={1}
              />
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              Snappy AI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
