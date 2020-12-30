export const now = () => {
    const date = new Date();
    const d = date.getDate().toString();
    const m = date.getMonth().toString();
    const y = date.getFullYear().toString();
    const h = date.getHours().toString();
    const i = date.getMinutes().toString();
    const s = date.getSeconds().toString();
    return `${d}/${m}/${y} ${h}:${i}:${s}`;
};
