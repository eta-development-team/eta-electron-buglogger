import React, { useState } from "react";
import AppTitle from "./AppTitle/AppTitle";
import LogStateTable from "./LogStateTable/LogStateTable";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.material.teal.dark.css";
import { Toast } from "devextreme-react/ui/toast";
import { Popup } from "devextreme-react/ui/popup";
import LogItemForm from "./LogItemForm/LogItemForm";

const App = () => {
  const [deleteItemInfo, setDeleteItemInfo] 
    = useState({toastVisible: false, item: null});

  const [displayedItemInfo, setDisplayedItemInfo] 
    = useState({infoDialogVisible: false, item: null});
  
    const dataSource = [
    {
      priority: "high",
      logText: "This is the highest priority task!",
      user: "Leo",
      created: Date.parse("2020-06-15"),
    },
    {
      priority: "moderate",
      logText: "This is a task under moderate.",
      user: "Leo",
      created: Date.parse("2020-06-15"),
    },
    {
      priority: "low",
      logText: "This is a low priority task.",
      user: "Leo",
      created: Date.parse("2020-06-15"),
    }];

  const showInfoDialog = () =>
  {
    if(displayedItemInfo.infoDialogVisible === true)
    {
      return(
        <Popup 
          title='Information'
          height={200}
          visible={displayedItemInfo.infoDialogVisible} 
          contentRender= { () =>
            {
              return (
                <div>{displayedItemInfo.item.logText}</div>
              );
            }
          }
          onHidden={ () =>
          {
            setDisplayedItemInfo({infoDialogVisible: false, item: null});
          }}
        />
      );
    }
    return null;
  };

  const showToastOnDeleted = () => {
    if (deleteItemInfo.toastVisible === true) {
      return (
        <Toast        
          minWidth={'90%'}
          message={ `There was deleted: '${deleteItemInfo.item.logText}'.` }
          closeOnClick={true}
          onHidden={() => {setDeleteItemInfo({toastVisible: false, item: null});}}
          visible={deleteItemInfo.toastVisible}
          type="error"
        />
      );
    } 
    return null;    
  };

  return (
    <React.Fragment>
      <AppTitle />
      <LogItemForm/>
      
      <LogStateTable
        dataSource={dataSource}
        onShowInfo={(item) => {
          setDisplayedItemInfo({infoDialogVisible: true, item: item});
        }}
        onDeleteItem={(item) => {
          setDeleteItemInfo({toastVisible: true, item: item});          
        }}
      />
      {showInfoDialog()}
      {showToastOnDeleted()}
    </React.Fragment>
  );
};

export default App;
