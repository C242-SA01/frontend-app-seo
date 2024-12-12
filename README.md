This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Next.js Backend API Documentation (Pages Router)

This project uses **Next.js Pages Router** to implement backend APIs. These APIs are designed to support features such as user authentication, registration, SEO audits, and audit history management. Below is a detailed explanation of the available API endpoints.

---

## **Login**
### **Endpoint:** `POST /api/login`
**Description:**
This endpoint is used for user authentication.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
- **Success:**
  ```json
  {
    "message": "Login successful",
    "token": "eyJhbGci...<JWT>"
  }
  ```
- **Failure:**
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

---

## **Register**
### **Endpoint:** `POST /api/register`
**Description:**
This endpoint is used for registering new users.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**Response:**
- **Success:**
  ```json
  {
    "message": "Registration successful"
  }
  ```
- **Failure:**
  ```json
  {
    "error": "Email already exists"
  }
  ```

---

## **History**
### **Endpoint:** `GET /api/history`
**Description:**
Retrieve a list of audit history based on the currently logged-in user.

**Headers:**
```
Authorization: Bearer <JWT>
```

**Response:**
```json
[
  {
    "id": "1",
    "url": "https://example.com",
    "auditDate": "2023-06-01",
    "status": "Completed"
  },
  {
    "id": "2",
    "url": "https://example2.com",
    "auditDate": "2023-06-02",
    "status": "In Progress"
  }
]
```

---

## **Detail History**
### **Endpoint:** `GET /api/history/:id`
**Description:**
Retrieve detailed audit history by its ID.

**Headers:**
```
Authorization: Bearer <JWT>
```

**Response:**
```json
{
  "generalInformation": {
    "clientName": "Client Y",
    "websiteURL": "https://google.com",
    "date": "2023-06-01"
  },
  "performanceMetrics": {
    "gtmetrixGrade": "A",
    "gtmetrixPerformance": 85,
    "gtmetrixStructure": 80,
    "pagespeedPerformance": 90,
    "pagespeedAccessibility": 75,
    "pagespeedBestPractices": 88,
    "pagespeedSEO": 82
  },
  "contentAnalysis": {
    "brokenLinksCount": 3,
    "brokenLinksURL": "https://example.com/broken-links",
    "duplicateContentPercentage": 12,
    "commonContentPercentage": 45,
    "uniqueContentPercentage": 43,
    "mobileFriendly": true
  },
  "metadata": {
    "metaTitle": "Example Page Title",
    "metaTitleCount": 1,
    "metaDescription": "Example meta description.",
    "metaDescriptionCount": 1,
    "h1Count": 1,
    "h2Count": 2,
    "h3Count": 3,
    "h4Count": 0,
    "h5Count": 0,
    "h6Count": 0,
    "metaRobots": true,
    "metaKeywords": "example, keywords",
    "openGraphStatus": "Implemented"
  },
  "technicalDetails": {
    "canonicalTagPresent": true,
    "sitemapPresent": true,
    "robotsTxtPresent": true,
    "googleSearchConsoleConnected": true,
    "faviconPresent": true
  },
  "additionalNotes": {
    "notes": "This is a sample audit."
  }
}
```

---

## **SEO Audit**
### **Endpoint:** `POST /api/audit`
**Description:**
Send a URL to the Flask backend for SEO audit.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
- **Success:**
  ```json
  {
    "message": "Audit request submitted",
    "auditId": "12345"
  }
  ```
- **Failure:**
  ```json
  {
    "error": "Invalid URL"
  }
  ```

---

## **Result**
### **Endpoint:** `GET /api/audit`
**Description:**
Retrieve SEO audit results from the Flask backend.

**Headers:**
```
Authorization: Bearer <JWT>
```

**Query Params:**
```
auditId: The ID of the audit result to retrieve.
```

**Response:**
```json
{
  "generalInformation": {
    "clientName": "Client Y",
    "websiteURL": "https://google.com",
    "date": "2023-06-01"
  },
  "performanceMetrics": {
    "gtmetrixGrade": "A",
    "gtmetrixPerformance": 85,
    "gtmetrixStructure": 80,
    "pagespeedPerformance": 90,
    "pagespeedAccessibility": 75,
    "pagespeedBestPractices": 88,
    "pagespeedSEO": 82
  },
  "contentAnalysis": {
    "brokenLinksCount": 3,
    "brokenLinksURL": "https://example.com/broken-links",
    "duplicateContentPercentage": 12,
    "commonContentPercentage": 45,
    "uniqueContentPercentage": 43,
    "mobileFriendly": true
  },
  "metadata": {
    "metaTitle": "Example Page Title",
    "metaTitleCount": 1,
    "metaDescription": "Example meta description.",
    "metaDescriptionCount": 1,
    "h1Count": 1,
    "h2Count": 2,
    "h3Count": 3,
    "h4Count": 0,
    "h5Count": 0,
    "h6Count": 0,
    "metaRobots": true,
    "metaKeywords": "example, keywords",
    "openGraphStatus": "Implemented"
  },
  "technicalDetails": {
    "canonicalTagPresent": true,
    "sitemapPresent": true,
    "robotsTxtPresent": true,
    "googleSearchConsoleConnected": true,
    "faviconPresent": true
  },
  "additionalNotes": {
    "notes": "This is a sample audit."
  }
}
```

--- 

Let me know if further details are required! 😊

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Here's a README section for deploying your Next.js app on **Google Cloud Run**:

---

## Deploy on Google Cloud Run

Google Cloud Run allows you to deploy containerized applications in a fully managed serverless environment. Follow these steps to deploy your Next.js app:

### Prerequisites
1. Install the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install).
2. Enable the **Cloud Run API** in your GCP project:
   ```bash
   gcloud services enable run.googleapis.com
   ```
3. Install [Docker](https://www.docker.com/products/docker-desktop) to containerize your application.
4. Ensure billing is enabled on your GCP project.

---

### Steps to Deploy

#### 1. Build the Application
First, build your Next.js app to prepare for deployment:
```bash
npm run build
```

#### 2. Create a Dockerfile
Create a `Dockerfile` in the root of your project:
```dockerfile
# Use the official Node.js image
FROM node:18-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port
EXPOSE 8080

# Start the Next.js server
CMD ["npm", "start"]
```

#### 3. Build and Tag the Docker Image
Build a Docker image of your application:
```bash
docker build -t gcr.io/PROJECT_ID/APP_NAME .
```
Replace `PROJECT_ID` with your GCP project ID and `APP_NAME` with your app's name.

#### 4. Push the Image to Google Container Registry (GCR)
Push your Docker image to GCR:
```bash
docker push gcr.io/PROJECT_ID/APP_NAME
```

#### 5. Deploy to Cloud Run
Deploy the Docker image to Cloud Run:
```bash
gcloud run deploy APP_NAME \
  --image gcr.io/PROJECT_ID/APP_NAME \
  --platform managed \
  --region REGION \
  --allow-unauthenticated
```
- Replace `APP_NAME` with your app's name.
- Replace `PROJECT_ID` with your GCP project ID.
- Replace `REGION` with your preferred region (e.g., `us-central1`).

#### 6. Access Your Application
Once deployed, you will receive a URL for your application. Visit the URL to access your Next.js app running on Cloud Run.

---

### Additional Resources
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Container Registry Documentation](https://cloud.google.com/container-registry/docs)

This guide enables you to deploy your Next.js application on Google Cloud Run efficiently.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
