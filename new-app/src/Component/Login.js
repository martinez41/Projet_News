import React from 'react'
import legacy from './legacy.jpeg'
function Login() {
  return (
    <div className='container-fluid'>
        <div className='row' id='contconnec'>
            <div className='col' id='contconnec1'>
                <img src={legacy}></img>
            </div>
            <div className='col' id='contconnec2s'>
                   <div className='formulaire'>
                       <div className='form'>
                             <p></p>
                             <div className='textboxs'>
                                <label for="exampleFormControlInput1" class="form-label">Nom</label><br/>
                                <input type="text" class="form-controls" id="exampleFormControlInput1" placeholder="Menga"/>
                            </div>
                             <div className='textboxs'>
                                <label for="inputPassword"  class="form-label">Prémon</label><br/>
                                <div >
                                <input type="text" class="form-controls" id="inputPassword" placeholder='Jordy'/>
                                </div>
                            </div>
                            <div className='textboxs'>
                                <label for="exampleFormControlInput1" class="form-label">Email address</label><br/>
                                <input type="email" class="form-controls" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className='textboxs'>
                                <label for="inputPassword"  class="form-label">date de naissance</label><br/>
                                <div >
                                <input type="date" class="form-controls" id="inputPassword" placeholder='****'/>
                                </div>
                            </div>
                            <div className='textboxs'>
                                <label for="inputPassword"  class="form-label">Mot de passe</label><br/>
                                <div >
                                <input type="password" class="form-controls" id="inputPassword" placeholder='****'/>
                                </div>
                            </div>
                            <div className='textboxs'>
                                <label for="inputPassword"  class="form-label">Confirmer mot de passe</label><br/>
                                <div >
                                <input type="password" class="form-controls" id="inputPassword" placeholder='****'/>
                                </div>
                            </div>
                            <button type="button" class="btn btn-outline-primary" id='btn'>valider</button>
                            <button type="button" class="btn btn-outline-primary" id='btn'>se connecter</button>
                       </div>
                   </div>
            </div>
        </div>
       
    </div>
  )
}

export default Login