# LWM (Learn With Me) - 100% Offline Private AI Engine

**LWM** is a high-performance, 100% offline private local AI workspace created by **Niranjan Kumar K** (KNI-ORG). It executes Large Language Models (LLMs) in GGUF format locally on your machine with complete privacy, high speed (46+ tokens/sec), and zero cloud API dependencies.

---

## 🚀 Quick Command Line Install & Launch

Open Terminal or Command Prompt and run:

```bash
curl https://kni1514.github.io/app/lwm.exe > lwm.exe && lwm
```

---

## 🌟 Key Features

- **100% Offline Compute**: All model weights execute directly on local hardware via native C++ `llama.dll` and `llama-cli`.
- **Direct Installer Executable**: Single-click installation with custom brand icon, Start Menu shortcuts, and zero configuration required.
- **Hugging Face Live Hub Search**: Search any GGUF repository directly from Hugging Face Hub with 1-click download & auto-configuration.
- **Top Curated Model Suite**: Pre-configured open-weights GGUF models (#1 Phi-4 Mini 3.8B, #2 Llama 3.1 8B, #3 Mistral 7B, #4 Gemma 2 9B, #5 Hermes 3 8B, #6 DeepSeek Coder 6.7B).
- **Resumable HTTP Range Downloads**: Incomplete model downloads write to temporary `.part` files and resume from exact byte offsets without corrupting model files.
- **Cancel Download Control**: Stop or cancel active downloads instantly from the UI.
- **3D Rotating Voice Orb**: Interactive Siri/Gemini-style 3D voice sphere with local speech-to-text dictation.

---

## 👤 About the Author

- **Architect**: Niranjan Kumar K (KNI-ORG)
- **Innovations**: Creator of the **K Programming Language** & Architect of **KNI OS**
- **Email**: `hackerenvironment1514@gmail.com`
- **WhatsApp / Phone**: `+91 9515888385`
- **Official Web Portal**: [https://kni1514.github.io/app/](https://kni1514.github.io/app/)

---

## ⚙️ Architecture & Technical Stack

```
UI Layer (Flutter Dart) ──► Provider State ──► Native AI Engine (llama-cli / llama.dll FFI) ──► Local GGUF Weights
```

- **Frontend**: Flutter (Dart) with custom high-contrast dark theme (#0A0A0F / #141422 / #10B981).
- **Engine**: Dual-strategy native runner (`llama-cli` process streaming & `llama_cpp_dart` FFI bindings).
- **Storage**: Embedded SQLite database (`lwm_app.db`) for conversation threads and local storage management.
