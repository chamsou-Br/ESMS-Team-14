import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FAQ2 = () => {
    return(
        <div className='FAQ' id='FAQ'>
             <div className="titre"> 
             <h2 className='grandtitle'>FAQ</h2>
    <section>
        <div className="container">
         
            
            <div className="accordion">
                <div className="accordion-item" id="question1">
                    <a className="accoridon-link" href="#question1">
                        What is our event about?
                        <FontAwesomeIcon className='A' icon={faPlus} />
                        <FontAwesomeIcon className='B' icon={faMinus} />             
                    </a>
                    <div className="answer">

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam ratione debitis, itaque voluptatibus incidunt iure repellat rerum, totam doloribus quidem in atque sed architecto fugiat ipsum explicabo obcaecati provident nobis ex eaque deleniti similique est neque. A, omnis suscipit!

                        </p>
                       
                    </div>
                </div>
                <div className="accordion-item" id="question2">
                    <a className="accoridon-link" href="#question2">
                        How long it will take?
                        
                        <FontAwesomeIcon className='A' icon={faPlus} />
                        <FontAwesomeIcon className='B' icon={faMinus} /> 
                    </a>
                    <div className="answer">
                    
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam ratione debitis, itaque voluptatibus incidunt iure repellat rerum, totam doloribus quidem in atque sed architecto fugiat ipsum explicabo obcaecati provident nobis ex eaque deleniti similique est neque. A, omnis suscipit!

                        </p>
                       
                    </div>
                </div> <div className="accordion-item" id="question3">
                    <a className="accoridon-link" href="#question3">
                        What are it´s benefits?
                        <FontAwesomeIcon className='A' icon={faPlus} />
                        <FontAwesomeIcon className='B' icon={faMinus} /> 
                    </a>
                    <div className="answer">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam ratione debitis, itaque voluptatibus incidunt iure repellat rerum, totam doloribus quidem in atque sed architecto fugiat ipsum explicabo obcaecati provident nobis ex eaque deleniti similique est neque. A, omnis suscipit! 

                        </p>
                    </div>
                </div> 
                <div className="accordion-item" id="question4">
                    <a className="accoridon-link" href="#question4">
                        How to participate?
                        <FontAwesomeIcon className='A' icon={faPlus} />
                        <FontAwesomeIcon className='B' icon={faMinus} /> 
                    </a>
                    <div className="answer">
                        <p>
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam ratione debitis, itaque voluptatibus incidunt iure repellat rerum, totam doloribus quidem in atque sed architecto fugiat ipsum explicabo obcaecati provident nobis ex eaque deleniti similique est neque. A, omnis suscipit!
                        </p>

                    
                    </div>
                </div>

            </div>
        </div>

    </section>
     </div>
     </div>
    )
}

export default FAQ2