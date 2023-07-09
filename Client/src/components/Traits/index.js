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
                { id: "fade-out", name: "fade-out" },
              ],
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
