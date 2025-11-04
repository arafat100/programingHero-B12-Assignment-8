
export const loadInstalled = () => {
  try {
    const raw = localStorage.getItem("installed");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveInstalled = (ids) => {
  try {
    localStorage.setItem("installed", JSON.stringify(ids));
  } catch (e) {
    console.error(e);
  }
};
