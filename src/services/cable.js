const ActionCable = require("actioncable");
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "portlightingevents.herokuapp.com/"
    : "10.0.0.111:3000";

const cable = ActionCable.createConsumer(`wss://${baseUrl}/cable`);

const createSub = () => {
  cable.subscriptions.create("GuestsChannel", {});
};

export default createSub;
