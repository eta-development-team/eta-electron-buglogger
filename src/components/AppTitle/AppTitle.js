import React from "react";
import "./AppTitle.css";
import { Menu } from "devextreme-react/ui/menu";
import { remote } from "electron";

class AppTitle extends React.Component {
  onExit = () => {
    remote.app.quit();
  };

  render = () => {
    return (
      <div className="CoreFlexRow CoreAppTitle">
        <div>
          <Menu
            items={[
              {
                icon: "menu",
                items: [
                  {
                    text: "Themes",
                    icon: "fill",
                    items: [
                      {
                        text: "Light Orange",
                        themeName: "material.orange.light",
                        onClick: (e) => {
                            console.log(e);
                            
                          this.props.themeSelector(e.itemData.themeName);
                        },
                      },
                      {
                        text: "Dark Orange",
                        themeName: "material.orange.dark",
                        onClick: (e) => {
                            console.log(e);
                          this.props.themeSelector(e.itemData.themeName);
                        },
                      },
                    ],
                  },
                  {
                    text: "About",
                    icon: "image",
                  },
                  {
                    text: "Exit",
                    icon: "close",
                    onClick: this.onExit,
                  },
                ],
              },
            ]}
          ></Menu>
        </div>
        <div className="CoreWindowWraggableTitle">
          <span>Bug Logger</span>
        </div>
        <div>
          <Menu
            items={[
              {
                icon: "close",
                onClick: this.onExit,
              },
            ]}
          />
        </div>
      </div>
    );
  };
}

export default AppTitle;
