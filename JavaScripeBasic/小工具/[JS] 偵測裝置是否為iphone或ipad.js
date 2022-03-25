const detectBrowser = {
    isIOs: () => /iPad|iPhone|iPod/.test(navigator.userAgent),
    isIpad: () => {
        if (/iPad/i.test(navigator.userAgent)) {
            return true;
        }
        if (/Macintosh/i.test(navigator.userAgent)) {
            try {
                document.createEvent('TouchEvent');
                return true;
            } catch (e) {}
        }
        return false;
    },
}

detectBrowser.isIOs() // true or false