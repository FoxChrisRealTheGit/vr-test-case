export default function (str) {
    switch (str) {
        case 'left':
            return "0 90 0"
        case 'right':
            return "0 -90 0"
        case 'back':
            return "0 180 0"
        case 'up':
            return "-90 0 180"
        case 'down':
            return "-90 0 0"
        default:
            break;
    }
}