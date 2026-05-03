# 🗳️ VoteIQ – Your Interactive Indian Election Guide

**VoteIQ** is a modern, educational web application designed to simplify and demystify the Indian electoral process. Built with a patriotic theme and powered by AI, VoteIQ provides an engaging journey through the world's largest democratic exercise.

## 🚀 Live Demo
**Deployed Site**: [https://electionvote-267262845777.asia-south1.run.app](https://electionvote-267262845777.asia-south1.run.app)

---

## ✨ Key Features

### 🤖 AI Election Assistant
*   **Powered by Claude 3.5 Sonnet**: A smart, conversational assistant ready to answer any questions about voting rules, ECI regulations, and the democratic process.
*   **Quick Topics**: One-tap chips to learn about EVMs, Voter Registration, and the Model Code of Conduct.

### 📚 Interactive Learning Modules
*   **3D Flip Flashcards**: Master election terminology (Constituency, ECI, EVM, etc.) with interactive 3D cards.
*   **Election Timeline**: A step-by-step visual journey from registration to the final counting of votes.
*   **Gamified Quiz**: Test your knowledge and earn insights into how Indian democracy works.

### 🇮🇳 Patriotic Design & Tribute
*   **Tricolor Aesthetic**: Saffron, White, and India Green theme integrated throughout the UI.
*   **Freedom Fighters Gallery**: A dedicated section honoring the guardians of our democracy—Mahatma Gandhi, Shaheed Bhagat Singh, and Netaji Subhash Chandra Bose.
*   **Democracy in Action**: High-quality visual storytelling showcasing the scale of Indian elections.

---

## 🛠️ Tech Stack

### Frontend
*   **React + Vite**: For a lightning-fast user experience.
*   **Tailwind CSS v4**: Modern, responsive styling with custom theme tokens.
*   **Framer Motion**: Smooth animations and 3D transitions.
*   **Lucide React**: Beautiful, consistent iconography.

### Backend
*   **Node.js + Express**: Secure proxy server for AI interactions.
*   **Anthropic SDK**: Integration with Claude 3.5 Sonnet.

### Deployment & CI/CD
*   **Google Cloud Run**: Scalable, containerized hosting.
*   **GitHub Actions**: Automated deployment (CI/CD) pipelines.
*   **Docker**: Multi-stage builds for optimized production images.

---

## 📂 Project Structure

```text
├── .github/workflows/    # CI/CD Deployment Scripts
├── backend/              # Node.js API Server
├── frontend/             # React Application
│   ├── src/assets/       # Images and Freedom Fighter Portraits
│   ├── src/components/   # Reusable UI Components
│   └── src/pages/        # Main Application Modules
└── Dockerfile            # Container Configuration
```

---

## 🏗️ Local Setup

1.  **Clone the Repo**:
    ```bash
    git clone https://github.com/singhhacker27/election.git
    ```

2.  **Run Backend**:
    ```bash
    cd backend
    npm install
    # Create .env with ANTHROPIC_API_KEY
    node index.js
    ```

3.  **Run Frontend**:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

---

## 🇮🇳 Democracy in Action
> "The vote is precious. It is the most powerful non-violent tool we have in a democratic society."

Developed with ❤️ for Indian Democracy.
