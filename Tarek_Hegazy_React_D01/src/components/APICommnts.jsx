export function fetchComments(videoId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allComments = {
                1: ["Awesome video!", "Thanks for this."],
                2: ["Very helpful!", "I didn't know that."],
                3: ["Nice explanation!", "Great job!"],
                4: ["Simple and clear."],
                5: ["Can you do one on Vue?", "Subscribed!"],
                6: ["Loved the examples!", "Keep it up!"]
            };
            resolve(allComments[videoId] || []);
        }, 800);
    });
}
