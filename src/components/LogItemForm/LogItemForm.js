import React from "react";
import Form, {
  Item,
  SimpleItem,
  ButtonItem,
  Label,
} from "devextreme-react/ui/form";

class LogItemForm extends React.Component {
  state = {
    log: "Some a very important task.",
    user: "Leo",
    priority: "high",
  };

  render = () => {
    return (
      <Form
        style={{ padding: 20 }}
        labelLocation="top"
        colCount={2}
        formData={this.state}
      >
        <SimpleItem editorType="dxTextBox" colSpan={2} dataField="log">
          <Label text="Log" location="top" />
        </SimpleItem>

        <SimpleItem editorType="dxTextBox" colSpan={1} dataField="user">
          <Label text="User" />
        </SimpleItem>
        <SimpleItem
          editorType="dxSelectBox"
          colSpan={1}
          editorOptions={{ items: ["high", "moderate", "low"] }}
          dataField="priority"
        >
          <Label text="Priority" />
        </SimpleItem>
        <ButtonItem
          style={{ padding: 20 }}
          colSpan={2}
          buttonOptions={{
            text: "Add log item",
            width: "100%",
            onClick: () => {
              console.log(this.state);
            },
          }}
        />
      </Form>
    );
  };
}
export default LogItemForm;
