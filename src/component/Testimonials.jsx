import styles from './Testimonials.module.css'
// import img from "../assets/t-img.avif"

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Gladis Lennon",
        position: "Head of SEO",
        img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Gladis Lennon",
        position: "Head of SEO",
        img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a voluptatum quidem Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Gladis Lennon",
        position: "Head of SEO",
        img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        name: "Gladis Lennon",
        position: "Head of SEO",
        img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Gladis Lennon",
        position: "Head of SEO",
        img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "Gladis Lennon",
        position: "Head of SEO",
        img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
];

const Testimonials = () => {

    return (
        <div className={styles.testimonialsContainer}>
            {testimonials.map((testimonial, index) => (
                <div className={styles.testimonialCard} key={index}>
                    <div className={styles.testimonialImg}>
                        <img src={testimonial.img} alt={testimonial.name} />
                    </div>
                    <div class={styles.testimonialContent}>
                        <p className={styles.testimonialText}>{testimonial.text}</p>
                        <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                        <p className={styles.testimonialPosition}>{testimonial.position}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Testimonials;