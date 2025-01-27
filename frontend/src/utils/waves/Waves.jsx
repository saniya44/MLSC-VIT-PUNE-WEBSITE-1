import "./waves.scss"

const Waves = () => {
    return (
        <div className="hero">
            <div className="waves-container">
                <svg id="visual" viewBox="0 0 1000 500" width="111%" height="1700" >
                    <path className="waves" d="M0 145L82 61L164 157L245 79L327 67L409 55L491 91L573 145L655 145L736 181L818 91L900 151L900 0L818 0L736 0L655 0L573 0L491 0L409 0L327 0L245 0L164 0L82 0L0 0Z" fill="#ffffff">

                    </path>
                    <path className="waves" style={{ animationDuration: "3s" }} d="M0 229L82 157L164 205L245 187L327 133L409 127L491 169L573 199L655 199L736 223L818 181L900 193L900 149L818 89L736 179L655 143L573 143L491 89L409 53L327 65L245 77L164 155L82 59L0 143Z" fill="#dbe9fe">
                    </path>
                    <path className="waves" d="M0 373L82 265L164 313L245 295L327 403L409 361L491 391L573 385L655 427L736 457L818 319L900 355L900 191L818 179L736 221L655 197L573 197L491 167L409 125L327 131L245 185L164 203L82 155L0 227Z" fill="#b4d4fc">

                    </path>
                    <path className="waves" d="M0 433L82 301L164 367L245 367L327 469L409 445L491 433L573 463L655 523L736 517L818 397L900 409L900 353L818 317L736 455L655 425L573 383L491 389L409 359L327 401L245 293L164 311L82 263L0 371Z" fill="#89c0fa"></path>


                    <path className="waves" d="M0 601L82 601L164 601L245 601L327 601L409 601L491 601L573 601L655 601L736 601L818 601L900 601L900 407L818 395L736 515L655 521L573 461L491 431L409 443L327 467L245 365L164 365L82 299L0 431Z" fill="#4facf7"></path>
                </svg>
            </div>
        </div>
    )
}

export default Waves