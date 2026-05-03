# Google Cloud Deployment Guide

To deploy **VoteIQ** to Google Cloud Run "without any error", please follow these steps. 

### 1. Install Google Cloud SDK
Since `gcloud` is currently missing on your system, please download and install it:
👉 [Install Google Cloud CLI for Windows](https://cloud.google.com/sdk/docs/install#windows)

### 2. Login and Configure
Open a **new terminal** after installation and run:
```powershell
gcloud auth login
gcloud config set project election-495120
```

### 3. Deploy Backend First
The backend provides the AI functionality. Run this from the `backend/` directory:
```powershell
cd backend
gcloud run deploy voteiq-backend --source . --region asia-south1 --allow-unauthenticated --set-env-vars="ANTHROPIC_API_KEY=your_actual_key_here"
```
*Note the URL provided after deployment (e.g., `https://voteiq-backend-xxx.a.run.app`).*

### 4. Deploy Frontend
Run this from the `frontend/` directory. **Replace the `VITE_API_URL` with your backend URL from Step 3.**
```powershell
cd ../frontend
gcloud run deploy voteiq-frontend --source . --region asia-south1 --allow-unauthenticated --set-env-vars="VITE_API_URL=https://your-backend-url-here.a.run.app"
```

### Why this works:
- **Dockerfiles**: I have already created `Dockerfile`s for both folders.
- **Port Handling**: Backend is configured to use the `$PORT` assigned by Cloud Run.
- **Dynamic API**: The frontend is now configured to use an environment variable for the API URL.

---
**Need help with the API Key?**
If you don't want to type the key in the command line, you can use Google Secret Manager or just set it in the Cloud Run Console after deployment.
