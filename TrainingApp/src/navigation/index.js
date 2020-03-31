import { CommonActions } from "@react-navigation/native";

class Navigation {
  init = ref => {
    this._navigator = ref;
  };

  getNavigator = () => this._navigator;

  go = (name, params) => {
    const action = CommonActions.navigate({
      name,
      params
    });

    this.getNavigator().dispatch(action);
  };

  back = () => {
    const action = CommonActions.goBack();
    this.getNavigator().dispatch(action);
  };
}

export default new Navigation();
