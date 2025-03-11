import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { RiLink } from 'react-icons/ri'

const Card = ({ img, name, despc, domain }) => {
    return (
        <div>
            <div className="card card-1">
                <div className="card-i_t">
                    <img src={img} alt="Project image" />
                    <div className="card-text">
                        <h3>{name}</h3>
                        <p>
                            {despc}
                        </p>
                        <a
                            href={domain}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>
                                <RiLink />
                            </span>
                            <span>Visit</span>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <span>
                                <FaGithub />
                            </span>
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card