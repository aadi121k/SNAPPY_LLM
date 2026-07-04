import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  MessageSquarePlus,
  Search,
  Settings,
  MoreHorizontal,
  Trash2,
  Edit3,
  Bookmark,
  BookmarkCheck,
  X,
} from 'lucide-react';
import { Logo, Button, Input, Modal } from '../ui';
import { useChat, useSettings } from '../../contexts';
import { formatDate, cn } from '../../utils/helpers';
import { Conversation } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    conversations,
    currentConversation,
    setCurrentConversation,
    createNewConversation,
    deleteConversation,
    renameConversation,
    toggleSaveConversation,
    searchQuery,
    setSearchQuery,
    getFilteredConversations,
  } = useChat();
  const { settings } = useSettings();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleNewChat = () => {
    const newConv = createNewConversation(settings.model);
    navigate(`/chat/${newConv.id}`);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const handleSelectChat = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    navigate(`/chat/${conversation.id}`);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const handleEdit = (conv: Conversation) => {
    setEditingId(conv.id);
    setEditTitle(conv.title);
  };

  const handleSaveEdit = () => {
    if (editingId && editTitle.trim()) {
      renameConversation(editingId, editTitle.trim());
    }
    setEditingId(null);
    setEditTitle('');
  };

  const handleDelete = (id: string) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deletingId) {
      deleteConversation(deletingId);
      if (currentConversation?.id === deletingId) {
        navigate('/');
      }
    }
    setShowDeleteModal(false);
    setDeletingId(null);
  };

  const filteredConversations = getFilteredConversations();
  const savedConversations = filteredConversations.filter((c) => c.saved);
  const recentConversations = filteredConversations.filter((c) => !c.saved);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : '-100%',
          width: isOpen ? 280 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={cn(
          'fixed md:relative left-0 top-0 h-full bg-white border-r border-slate-200 z-50',
          'flex flex-col overflow-hidden'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-100">
          <Logo size="sm" />
          <button
            onClick={onClose}
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <Button
            onClick={handleNewChat}
            icon={<MessageSquarePlus size={18} />}
            className="w-full justify-start"
          >
            New Chat
          </Button>
        </div>

        {/* Search */}
        <div className="px-3 pb-2">
          <Input
            icon={<Search size={16} />}
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-sm"
          />
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-2">
          {savedConversations.length > 0 && (
            <div className="mb-4">
              <h3 className="px-2 py-1 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Saved
              </h3>
              {savedConversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={currentConversation?.id === conv.id}
                  onSelect={() => handleSelectChat(conv)}
                  onEdit={() => handleEdit(conv)}
                  onDelete={() => handleDelete(conv.id)}
                  onToggleSave={() => toggleSaveConversation(conv.id)}
                  isEditing={editingId === conv.id}
                  editTitle={editTitle}
                  onEditChange={setEditTitle}
                  onSaveEdit={handleSaveEdit}
                  onCancelEdit={() => setEditingId(null)}
                />
              ))}
            </div>
          )}

          {recentConversations.length > 0 && (
            <div>
              <h3 className="px-2 py-1 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Recent
              </h3>
              {recentConversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={currentConversation?.id === conv.id}
                  onSelect={() => handleSelectChat(conv)}
                  onEdit={() => handleEdit(conv)}
                  onDelete={() => handleDelete(conv.id)}
                  onToggleSave={() => toggleSaveConversation(conv.id)}
                  isEditing={editingId === conv.id}
                  editTitle={editTitle}
                  onEditChange={setEditTitle}
                  onSaveEdit={handleSaveEdit}
                  onCancelEdit={() => setEditingId(null)}
                />
              ))}
            </div>
          )}

          {filteredConversations.length === 0 && searchQuery && (
            <div className="p-4 text-center text-sm text-slate-400">
              No conversations found
            </div>
          )}

          {conversations.length === 0 && !searchQuery && (
            <div className="p-4 text-center text-sm text-slate-400">
              No conversations yet
            </div>
          )}
        </div>

        {/* Footer */}
       {/* Footer */}
<div className="p-3 border-t border-slate-100 space-y-3">
  <button
    onClick={() => navigate('/settings')}
    className={cn(
      'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors',
      location.pathname === '/settings' && 'bg-slate-100'
    )}
  >
    <Settings size={18} />
    Settings
  </button>

  <div className="text-center border-t border-slate-100 pt-3">
    <p className="text-xs font-medium text-slate-600">
      Powered by <span className="text-indigo-600">Groq</span>
    </p>
    <p className="text-[11px] text-slate-400 mt-1">
      Built by <span className="font-medium">Aditya Upadhyay</span>
    </p>
  </div>
</div>
      </motion.aside>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Conversation"
        size="sm"
      >
        <p className="text-slate-600 mb-6">
          Are you sure you want to delete this conversation? This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleSave: () => void;
  isEditing: boolean;
  editTitle: string;
  onEditChange: (title: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  isActive,
  onSelect,
  onEdit,
  onDelete,
  onToggleSave,
  isEditing,
  editTitle,
  onEditChange,
  onSaveEdit,
  onCancelEdit,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={cn(
        'group relative flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors',
        'hover:bg-slate-50',
        isActive && 'bg-indigo-50 hover:bg-indigo-100'
      )}
    >
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => onEditChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSaveEdit();
            if (e.key === 'Escape') onCancelEdit();
          }}
          onBlur={onSaveEdit}
          autoFocus
          className="flex-1 px-2 py-1 text-sm bg-white border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      ) : (
        <>
          <div onClick={onSelect} className="flex-1 min-w-0">
            <p className="text-sm text-slate-700 truncate">{conversation.title}</p>
            <p className="text-xs text-slate-400">{formatDate(conversation.updatedAt)}</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={cn(
                'p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100',
                'opacity-0 group-hover:opacity-100 transition-opacity',
                showMenu && 'opacity-100'
              )}
            >
              <MoreHorizontal size={16} />
            </button>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 top-full mt-1 z-10 bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => {
                      onEdit();
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <Edit3 size={14} />
                    Rename
                  </button>
                  <button
                    onClick={() => {
                      onToggleSave();
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    {conversation.saved ? (
                      <>
                        <BookmarkCheck size={14} className="text-indigo-500" />
                        Unsave
                      </>
                    ) : (
                      <>
                        <Bookmark size={14} />
                        Save
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      onDelete();
                      setShowMenu(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
