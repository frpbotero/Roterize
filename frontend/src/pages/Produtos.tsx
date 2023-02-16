import "./Produtos.css"

export function Produtos(){
    return(
        <div className="productContainer">
            <div className="busca">
            <input type="text" placeholder="Nome"/>
            <button>Buscar</button>
            </div>
            <div className="cadastro">
                <button>Cadastrar</button>
            </div>
            
            <div className="modal">
                <div className="productName">
                    <label htmlFor="productName">Nome do Produto</label>
                    <input type="text" id="produtName" placeholder="Caixa de papel 10cm."/>
                </div>
                <div className="productData">
              
                    <label htmlFor="descriptionProduct">Descrição</label>
                    <textarea name="descriptionProduct" id="descriptionProduct" ></textarea>
                   

                </div>
                
                <div className="buttonsProduct">
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
                 
                
            </div>







        </div>
    )
}