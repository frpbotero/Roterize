import "./Clientes.css"

export function Clientes(){





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
                    <input type="text" id="name" placeholder="Brasil Bebidas ltda."/>
                </div>
                <div className="clientData">
                    <div>
                    <label htmlFor="CNPJ">CNPJ</label>
                    <input type="number" id="CNPJ"placeholder="99.999.999/9999-99"/>
                    </div>
                    <div>
                    <label htmlFor="whatsapp">WhatsApp</label>
                    <input type="number" name="whatsapp" id="whatsapp" placeholder="(92)9999-9999" />
                    </div>
                    <div>
                    <label htmlFor="contact">Contato</label>
                    <input type="number" name="contact" id="contact" placeholder="(92)9999-9999" />
                    </div>
                    
                </div>
                <div className="clientInfo">
                    <div>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email"placeholder="email@dominio.com.br" />
                    </div>
                    <div>

                        <label htmlFor="zipCode">CEP</label>
                        <input type="number" id="zipCode"placeholder="CEP"/>
                        </div>
                    
                </div>              
                <div className="clientAddress">
                        
                        <div>

                        <label htmlFor="address">Endereço</label>
                        <input type="text" id="address" placeholder="Endereço"/>
                        </div>
                        <div>

                        <label htmlFor="district">Bairro</label>
                        <input type="text" id="district" placeholder="bairro"/>
                        </div>
                        <div>

                        <label htmlFor="number">Número</label>
                        <input type="number" id="number" placeholder="543"/>
                        </div>
                </div>
                <div className="clientSpecification">
                        <div>

                        <label htmlFor="complement">Complemento</label>
                        <input type="text" id="complement" placeholder="Galpão 9"/>
                        </div>
                        <div>

                        <label htmlFor="referencePoint">Ponto de referência</label>
                        <input type="text" id="referencePoint" placeholder="Próximo a bola da Suframa"/>
                        </div>
                </div>
                <div className="buttonsClient">
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
                 
                
            </div>







        </div>
    )
}