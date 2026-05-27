// ===============================
// SONGMATCH - RECOMMENDATION SCRIPT
// ===============================

const recommendationsGrid = document.getElementById('recommendationsGrid');


// ===============================
// LOAD RECOMMENDATIONS
// ===============================
async function loadRecommendations() {

    // Get selected songs from localStorage
    const selectedSongs = JSON.parse(
        localStorage.getItem('selectedSongs')
    );

    // Validation
    if (!selectedSongs || selectedSongs.length === 0) {

        recommendationsGrid.innerHTML = `
            <p class="empty-message">
                No songs selected.
            </p>
        `;

        return;
    }

    try {

        // Fetch recommendations from Flask backend
        const response = await fetch('/api/recommend', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                songs: selectedSongs
            })
        });

        const data = await response.json();

        // Render recommendations
        renderRecommendations(
            data.recommendations || []
        );

    } catch (error) {

        console.error(
            'Recommendation Error:',
            error
        );

        recommendationsGrid.innerHTML = `
            <p class="empty-message">
                Failed to load recommendations.
            </p>
        `;
    }
}


// ===============================
// RENDER RECOMMENDATIONS
// ===============================
function renderRecommendations(recommendations) {

    // No recommendations
    if (recommendations.length === 0) {

        recommendationsGrid.innerHTML = `
            <p class="empty-message">
                No recommendations found.
            </p>
        `;

        return;
    }

    // Render cards
    recommendationsGrid.innerHTML = recommendations.map(song => `

        <div class="rec-card">

            <img 
                src="/static/images/default.jpg"
                class="cover"
            >

            <div class="rec-content">

                <h3 class="rec-title">
                    ${song.name}
                </h3>

                <p class="rec-artist">
                    ${song.artist}
                </p>

                <small class="rec-genre">
                    Cluster ${song.cluster}
                </small>

            </div>

        </div>

    `).join('');
}


// ===============================
// PAGE LOAD
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    if (!recommendationsGrid) {

        console.error(
            'recommendationsGrid not found'
        );

        return;
    }

    loadRecommendations();
});