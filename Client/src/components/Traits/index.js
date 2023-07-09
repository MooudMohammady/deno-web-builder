const Traits = (editor) => {
  editor.DomComponents.getTypes().map((type) => { // Add attributes to all of tags and componnents
    editor.DomComponents.addType(type.id, {
      model: {
        defaults: {
          traits: [
            // ...editor.DomComponents.getType(type.id).model.prototype.defaults.traits,
            {
              label: "Animation",
              name: "data-aos",
              type: "select",
              options: [
                { id: "fade-in", name: "fade-in" },
                { id: "fade-up", name: "fade-up" },
                { id: "fade-down", name: "fade-down" },
                { id: "fade-left", name: "fade-left" },
                { id: "fade-right", name: "fade-right" },
                { id: "fade-up-left", name: "fade-up-left" },
                { id: "fade-up-right", name: "fade-up-right" },
                { id: "fade-down-left", name: "fade-down-left" },
                { id: "fade-down-right", name: "fade-down-right" },
                { id: "zoom-in", name: "zoom-in" },
                { id: "zoom-in-up", name: "zoom-in-up" },
                { id: "zoom-in-down", name: "zoom-in-down" },
                { id: "zoom-in-left", name: "zoom-in-left" },
                { id: "zoom-in-right", name: "zoom-in-right" },
                { id: "zoom-out", name: "zoom-out" },
                { id: "zoom-out-up", name: "zoom-out-up" },
                { id: "zoom-out-down", name: "zoom-out-down" },
                { id: "zoom-out-right", name: "zoom-out-right" },
                { id: "zoom-out-left", name: "zoom-out-left" },
              ],
            },
            {
              label: "Animation duration",
              name: "data-aos-duration",
              type: "select",
              options:[
                { id: "500", name: "500" },
                { id: "700", name: "700" },
                { id: "1000", name: "1000" },
                { id: "1300", name: "1300" },
                { id: "1500", name: "1500" },
              ]
            },
          ],
        },
      },
    });
  });
  editor.DomComponents.addType("input", {
    isComponent: (el) => el.tagName == "INPUT",
    model: {
      defaults: {
        traits: [
          // Strings are automatically converted to text types
          "name", // Same as: { type: 'text', name: 'name' }
          "placeholder",
          {
            type: "select", // Type of the trait
            label: "Type", // The label you will see in Settings
            name: "type", // The name of the attribute/property to use on component
            options: [
              { id: "text", name: "Text" },
              { id: "email", name: "Email" },
              { id: "password", name: "Password" },
              { id: "number", name: "Number" },
            ],
          },
          {
            type: "checkbox",
            name: "required",
          },
        ],
        // As by default, traits are binded to attributes, so to define
        // their initial value we can use attributes
        attributes: { type: "text", required: true },
      },
    },
  });
};

export default Traits;
