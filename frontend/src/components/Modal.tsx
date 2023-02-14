import "./Modal.css"
export function Modal(){
    return(
        <div className="containerModal">
            <div className="headerForm">
                <h3>FPF - Marcio</h3>
                <p>X</p>
            </div>
            <div>
                <p>Material</p>
                <div className="material">
                    <table className="blueTable">
                        <thead>
                            <tr>
                               <th>Quant</th> 
                               <th>Descrição</th>
                               <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10</td>
                                <td>Crachá PVC F/V Colorido</td>
                                <td><input type="checkbox" name="status" id="" /></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Crachá PVC F/V Colorido</td>
                                <td><input type="checkbox" name="status" id="" /></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Crachá PVC F/V Colorido</td>
                                <td><input type="checkbox" name="status" id="" /></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Crachá PVC F/V Colorido</td>
                                <td><input type="checkbox" name="status" id="" /></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Crachá PVC F/V Colorido</td>
                                <td><input type="checkbox" name="status" id="" /></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className="observationDiv">
                
                <textarea name="observation" id="observation"  />
                </div>

                <div className="buttonActions">
                    
                    
                <button className="buttonSave">Salvar</button>
                <button className="buttonSubmit">Enviar</button>
                    </div> 
            </div>
        </div>
    )
}