
export class Storage {
  setSettings(settings) { 
    window.localStorage.setItem('todoSettings', JSON.stringify(settings));
  }

  getSettings() { 
    const settingsRaw = window.localStorage.getItem('todoSettings');
    if (settingsRaw) {
      const settings = JSON.parse(settingsRaw);
      return settings;
    } else {
      return null;
    }
  }
}