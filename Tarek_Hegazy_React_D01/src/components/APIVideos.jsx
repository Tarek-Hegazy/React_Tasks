

export function fetchVideos(){
    return new Promise((success) => {
        setTimeout(() => {
            success([
                { id: 1, title: "Video 1", description: "Description for Video 1" },
                { id: 2, title: "Video 2", description: "Description for Video 2" },
                { id: 3, title: "Video 3", description: "Description for Video 3" },
                { id: 4, title: "Video 4", description: "Description for Video 4" },
                { id: 5, title: "Video 5", description: "Description for Video 5" },
                { id: 6, title: "Video 6", description: "Description for Video 6" },
            ]);
        }, 1000);
    });
};