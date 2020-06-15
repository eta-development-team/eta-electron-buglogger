import React from 'react';
import { DataGrid, Column } from 'devextreme-react/ui/data-grid'
import { Button } from 'devextreme-react/ui/button'

class LogStateTable extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render = () =>
    {
        return (
            <DataGrid style={ this.styles.dataGridStyles } dataSource={this.props.dataSource} >
                <Column dataField='priority' width={175} dataType='string' cellRender={ (e)=> {
                    const type = e.data.priority === 'high' ? 'danger' : (e.data.priority === 'low' ? 'success' : 'default');
                    return (
                        <Button 
                            width={125} 
                            text={e.data.priority} 
                            type={type} 
                            onClick={ () => this.props.onShowInfo(e.data) }
                        />    
                    );
                }} /> 

                <Column dataField='logText' dataType='string' />
                <Column dataField='user' width={100} dataType='string' />
                <Column dataField='created'  width={150} dataType='date' />
                <Column width={50} cellRender={
                    (e) => {
                        return (
                            <Button 
                                icon='close' 
                                width={25}  
                                type='danger'
                                onClick = {
                                     () => { this.props.onDeleteItem (e.data); } 
                                }
                            />         
                        );
                    }
                } />
            </DataGrid>
        );
    };

    styles = {
        dataGridStyles: {
            padding: 20
        }
        
    };
};

export default LogStateTable;