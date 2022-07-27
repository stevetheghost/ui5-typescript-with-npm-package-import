import BaseController from "./BaseController";
import { IconColor} from "sap/ui/core/library";
import Control from "sap/ui/core/Control";
import Event from "sap/ui/base/Event";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {

	formatIncidence(incidence: number) {
		return Math.round(incidence);
	}

	formatIconColor(incidence: number) {
		if (incidence < 500) {
			return IconColor.Default;
		} else if (incidence < 800) {
			return IconColor.Critical;
		} else {
			return IconColor.Negative;
		}
	}

	navToIncidenceDetail(event: Event) {
		const stateId = (event.getSource() as Control).getBindingContext().getProperty("abbreviation") as string;
		this.navTo("IncidenceDetailRoute", { id: stateId });
	}


}
