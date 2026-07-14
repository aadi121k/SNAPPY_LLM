import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  Settings,
  ChevronDown,
  Zap,
  LogOut,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import { Logo } from "../ui";
import { useSettings } from "../../contexts";
import { useAuth } from "../../contexts/AuthContext";
import { MODELS as MODELS_CONST } from "../../utils/constants";
import { AIModel } from "../../types";

interface HeaderProps {
  onMenuClick: () => void;
  model?: AIModel;
  onModelChange?: (model: AIModel) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  model,
  onModelChange,
}) => {
  const navigate = useNavigate();

  const { settings, updateModel } = useSettings();
  const { user, signIn, signOutUser } = useAuth();

  const [showModelPicker, setShowModelPicker] = useState(false);

  const currentModel = model || settings.model;

  const currentModelInfo = MODELS_CONST.find(
    (m) => m.id === currentModel
  );

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 bg-white/80 backdrop-blur border-b border-slate-200"
    >
      {/* LEFT */}

      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors md:hidden"
        >
          <Menu size={20} />
        </button>

        <button
          onClick={() => navigate("/")}
          className="hidden md:block hover:opacity-80 transition-opacity"
        >
          <Logo size="sm" />
        </button>

      </div>

      {/* MODEL PICKER */}

      <div className="relative">

        <button
          onClick={() =>
            setShowModelPicker(!showModelPicker)
          }
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-2">

            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap
                size={14}
                className="text-white"
              />
            </div>

            <span className="text-sm font-medium text-slate-700">
              {currentModelInfo?.name || "Select Model"}
            </span>

          </div>

          <ChevronDown
            size={16}
            className="text-slate-400"
          />
        </button>
                <AnimatePresence>
          {showModelPicker && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10"
                onClick={() => setShowModelPicker(false)}
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                }}
                transition={{ duration: 0.15 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 w-64 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden"
              >
                <div className="p-2">
                  {MODELS_CONST.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        if (onModelChange) {
                          onModelChange(m.id);
                        } else {
                          updateModel(m.id);
                        }

                        setShowModelPicker(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        currentModel === m.id
                          ? "bg-indigo-50 text-indigo-700"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-lg">
                        {m.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">
                          {m.name}
                        </p>

                        <p className="text-xs text-slate-500 truncate">
                          {m.description}
                        </p>
                      </div>

                      {currentModel === m.id && (
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-3">

        {!user ? (
          <button
  onClick={signIn}
  className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 shadow-sm transition-all"
>
  <FcGoogle size={22} />

  <span className="text-sm font-semibold text-slate-800">
    Continue with Google
  </span>
</button>
        ) : 
          <>
            <div className="hidden md:flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">

      <img
  src={
    user.photoURL && user.photoURL.trim() !== ""
      ? user.photoURL
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
          user.displayName || "User"
        )}&background=6366f1&color=fff&size=128`
  }
  alt={user.displayName || "Profile"}
  className="w-10 h-10 rounded-full object-cover border border-slate-300"
  referrerPolicy="no-referrer"
  onError={(e) => {
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.displayName || "User"
    )}&background=6366f1&color=fff&size=128`;
  }}
/>

              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  {user.displayName}
                </span>

                <span className="text-xs text-slate-500">
                  {user.email}
                </span>
              </div>
            </div>

            <button
              onClick={signOutUser}
              className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
                        </>
}

        <button
          onClick={() => navigate("/settings")}
          className="hidden md:flex p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          title="Settings"
        >
          <Settings size={20} />
        </button>

      </div>

    </motion.header>
  );
};

export default Header;
        