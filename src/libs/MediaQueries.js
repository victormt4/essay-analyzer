const MediaQueries = {
    SM: () => window.matchMedia('(min-width: 576px)').matches,
    MD: () => window.matchMedia('(min-width: 768px)').matches,
    LG: () => window.matchMedia('(min-width: 992px)').matches,
    XL: () => window.matchMedia('(min-width: 1200px)').matches
};
export default MediaQueries;