import './css/Projects.css'


function Project({ name }: any) {
    return <div className='project'>



    </div>
}



export function Projects(props: any) {
    return <>
        <div className="page" id='projects-page'>
            <div id='projects-body'>
                <h1 style={{ fontSize: '4em' }}>Projects</h1>



                <div id='project-container'>
                    <div className='project'>
                        <h1>Project Name</h1>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue mauris mollis mattis accumsan. Duis efficitur elit et malesuada maximus.
                        </p>

                        <p className='details-link'>More Details</p>
                    </div>


                </div>


            </div>
        </div>
    </>
}