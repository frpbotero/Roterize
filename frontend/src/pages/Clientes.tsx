import { useState } from "react"
import "./Clientes.css"
import { apiService } from "../Api/Api"
import { clients } from "../types/types"

export function Clientes(){
    const [name,setName] = useState("")
    const [CNPJ,setCNPJ] = useState("")
    const [numberwhats,setNumberwhats] = useState("")
    const [numbercontact,setNumbercontact] = useState("")
    const [email,setEmail] = useState("")
    const [cep,setCep] = useState("")
    const [address,setAddress] = useState("")
    const [district,setDistrict] = useState("")
    const [number,setNumber] = useState("")
    const [complement,setComplement] = useState("")
    const [referencePoint,setReferencePoint] = useState("")

    const payload:clients={
        name: name,
        cnpj: CNPJ,
        numberwhats: Number(numberwhats),
        numbercontact: Number(numbercontact),
        email: email,
        cep: cep,
        address: address,
        district: district ,
        number: Number(number),
        complement: complement,
        referencePoint: referencePoint,
    }


    async function createClient(){
        await apiService.clients.createURL(payload)
        .then(response=>alert(response.data.message))
        .catch(error=>console.log(error))
        document.getElementById("name").value = ""
        document.getElementById("CNPJ").value = ""
        document.getElementById("whatsapp").value = ""
        document.getElementById("contact").value = ""
        document.getElementById("email").value = ""
        document.getElementById("zipCode").value = ""
        document.getElementById("address").value = ""
        document.getElementById("district").value = ""
        document.getElementById("number").value = ""
        document.getElementById("complement").value = ""
        document.getElementById("referencePoint").value = ""
    }


    function clearClient(){
        document.getElementById("name").value = ""
        document.getElementById("CNPJ").value = ""
        document.getElementById("whatsapp").value = ""
        document.getElementById("contact").value = ""
        document.getElementById("email").value = ""
        document.getElementById("zipCode").value = ""
        document.getElementById("address").value = ""
        document.getElementById("district").value = ""
        document.getElementById("number").value = ""
        document.getElementById("complement").value = ""
        document.getElementById("referencePoint").value = ""

    }


    return(
        <div className="containerClientes">
            <div className="busca">
            <input type="text" placeholder="Nome"/>
            <button>Buscar</button>
            </div>
            <div className="cadastro">
                <button>Cadastrar</button>
            </div>
            
            <div className="modal">
                <div className="clientName">
                    <label htmlFor="name">Nome Cliente</label>
                    <input type="text" name="name" id="name" placeholder="Brasil Bebnameas ltda." onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="clientData">
                    <div>
                    <label htmlFor="CNPJ">CNPJ</label>
                    <input type="text" name="CNPJ" id="CNPJ"placeholder="99.999.999/9999-99"onChange={e=>setCNPJ(e.target.value)}/>
                    </div>
                    <div>
                    <label htmlFor="whatsapp">WhatsApp</label>
                    <input type="number" name="whatsapp" id="whatsapp" placeholder="(92)9999-9999" onChange={e=>setNumberwhats(e.target.value)}/>
                    </div>
                    <div>
                    <label htmlFor="contact">Contato</label>
                    <input type="number" name="contact" id="contact"  placeholder="(92)9999-9999" onChange={e=>setNumbercontact(e.target.value)}/>
                    </div>
                    
                </div>
                <div className="clientInfo">
                    <div>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email"placeholder="email@dominio.com.br" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div>

                        <label htmlFor="zipCode">CEP</label>
                        <input type="number" name="zipCode" id="zipCode"placeholder="CEP" onChange={e=>setCep(e.target.value)}/>
                        </div>
                    
                </div>              
                <div className="clientAddress">
                        
                        <div>

                        <label htmlFor="address">Endereço</label>
                        <input type="text" name="address" id="address" placeholder="Endereço" onChange={e=>setAddress(e.target.value)}/>
                        </div>
                        <div>

                        <label htmlFor="district">Bairro</label>
                        <input type="text" name="district" id="district" placeholder="bairro" onChange={e=>setDistrict(e.target.value)}/>
                        </div>
                        <div>

                        <label htmlFor="number">Número</label>
                        <input type="number" name="number" id="number"placeholder="543" onChange={e=>setNumber(e.target.value)}/>
                        </div>
                </div>
                <div className="clientSpecification">
                        <div>

                        <label htmlFor="complement">Complemento</label>
                        <input type="text" name="complement" id="complement" placeholder="Galpão 9" onChange={e=>setComplement(e.target.value)}/>
                        </div>
                        <div>

                        <label htmlFor="referencePoint">Ponto de referência</label>
                        <input type="text" name="referencePoint" id="referencePoint" placeholder="Próximo a bola da Suframa" onChange={e=>setReferencePoint(e.target.value)}/>
                        </div>
                </div>
                <div className="buttonsClient">
                    <button onClick={clearClient}>Cancelar</button>
                    <button onClick={createClient}>Salvar</button>
                </div>
                 
                
            </div>







        </div>
    )
}