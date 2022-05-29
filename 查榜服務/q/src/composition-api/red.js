import { ref , onUnmounted, onMounted} from 'vue'

export function RwdFn() {
    const width = ref(window.innerWidth)
    
    const showWidth = ref(true);

    
    function reportWindowSize() {
        width.value > 576 ? showWidth.value = false : showWidth.value = true
        width.value = window.innerWidth;
    }

    reportWindowSize();

    onMounted(() => {
        window.addEventListener('resize', reportWindowSize, true)
    });

    onUnmounted(() => {
        window.removeEventListener('resize', reportWindowSize);
    });

    return {showWidth, width};
}