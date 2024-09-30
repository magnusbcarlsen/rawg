const getCroppetImageUrlStore = (url: string | null) => {
    if (!url) return "";
    return url.replace("media/games", "media/resize/640/-/games");
};

export default getCroppetImageUrlStore;