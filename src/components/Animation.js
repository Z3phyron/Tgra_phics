export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 1.2,
            when: "beforeChildren"
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.75,
            staggerChildren: 0.5
        }
    } 
}