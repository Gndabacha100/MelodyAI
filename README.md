MelodyAI is a web-based song recommendation system that combines Machine Learning and Web Development to provide personalized music recommendations. The system recommends songs based on audio feature similarity such as energy, danceability, tempo, mood, and more.

The project uses K-Means Clustering and Cosine Similarity for intelligent recommendations and integrates a clean frontend UI with a Flask backend.

🚀 Features:

🔐 User Signup/Login Interface
🎶 Select Favorite Songs
🎧 Personalized Song Recommendations
🤖 Machine Learning-Based Recommendation Engine
📊 Audio Feature Analysis
⚡ Fast Recommendations using Cluster-Based Filtering
🌐 Flask Integration for Backend Communication
🎨 Clean and Interactive Web UI
🧠 Machine Learning Approach

The recommendation system uses:

✅ K-Means Clustering

Songs are grouped into clusters based on audio features like:

- Danceability
- Energy
- Loudness
- Tempo
- Valence
- Acousticness

The optimal value of K was selected using the Elbow Method.

✅ Cosine Similarity

When a user selects a song:

- The system identifies its cluster
- Filters songs within that cluster
- Uses cosine similarity to find the most similar songs

This improves:

- Recommendation quality
- System speed
- Scalability


🛠️ Technologies Used:

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Flask
- Python
- Machine Learning
- Pandas
- Scikit-learn
- StandardScaler
K-Means Clustering
Cosine Similarity
Joblib
