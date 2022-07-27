import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import { Timeline as VisTimeline, DataSet} from "vis-timeline/standalone/esm/vis-timeline-graph2d.min";

/**
* @name com.myorg.myapp.control.Timeline
*/
export default class Timeline extends Control {


    renderer = {
		apiVersion: 2,
		render: (rm: RenderManager, timeline: Timeline) => {
			rm.openStart("div", timeline);
            rm.style("margin", "1rem" )
			rm.openEnd();

            rm.voidStart("div", timeline.getId() + "-vis-timeline")
            rm.voidEnd()

			rm.close("div");
		}
	}
    
    onAfterRendering() {
        const getItems = () => {
            return new DataSet([
                { id: 1, start: new Date(), content: "hello"},
                { id: 2, start: new Date(), content: "hello"},
                { id: 3, start: new Date(), content: "hello"},
                { id: 4, start: new Date(), content: "hello"},
                { id: 5, start: new Date(), content: "hello"},
                { id: 6, start: new Date(), content: "hello"},
            ])
        }
        const getOptions = () => {
        }
        const data = getItems();
        let timeline: VisTimeline = new VisTimeline(
            document.getElementById(this.getDomRef("vis-timeline").id),
            data,
            {
                editable: true
            }
        );

	}

}