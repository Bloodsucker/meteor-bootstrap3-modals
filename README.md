# bootstrap3-modals

Bootstrap 3 modals properly integrated within Meteor platform.

## Installation

```bash
meteor add bloodsucker:bootstrap3-modals
```

After installation, you can use the package through global BModals.

## Usage

The proper way to create a modal in Meteor:

```javascript
// bModal is not a jQuery element.
var bModal = BModals.showNew('modalContentTemplateName', function () {
	return MyCollection.findOne(colectionId);
});
```

The proper way to force to hide a modal in Meteor:
```javascript
bModal.destroy();
```

You can listen bootstrap 3 modal events as well:
```javascript
// Same as $modal.on('hidden.bs.modal', cb);
bModal.on('hidden', function () { 
	//To be executed when modal is hidden
});
```

## API

### BModals.showNew(modalContentTemplateName, [data, [options]]);

Creates and shows a bootstrap modal and sets as a content the Template *modalContentTemplateName*.

#### Arguments

* **modalContentTemplateName** String
  
  The template name that will act as a content for the Modal.
  
* **data** Object or Function
  
  Optional. The data context to use, or a function returning a data context. If a function is provided, it will be reactively re-run.
  
#### Options

* **attached** Template
  
  Optional. Links the modal to that *Template* (actually to the *Blaze.View* Template's instance) life-cycle. When the template is destroyed, then the modal will be also hide and then destroyed.

After executing *BModals.showNew* it returns a *BModal* instance.

### new BModal()

It cannot be instantiated from outside the package and it is the constructor to instance an object which represents a bootstrap modal.

An instance can be retrieved after executing *BModals.showNew*.

The following properties and methods are available on a *BModal* instance:

* **attached** Boolean

  If the *attached* property was set in BModals.showNew options then this would be true meanwhile the modal and the specified Template instance both exist.

* **on(eventName, cb)**

  Is the way to listen bootstrap [modal events](http://getbootstrap.com/javascript/#modals-events). *eventName* argument is completed as:

  ```javascript
  eventName + ".bs.modal"
  ```

* **destroy()**
  
  It hides and then destroy an active modal.

## Hey!

Do you want to use it in your project or have any comment? I will be so glad to hear it so, please, [let me know](#contacts-credits-and-license).

## Contact, credit and license

Released under [LGPLv3]

Basically you can use it *wherever you want* but keeping any code modification with the same license or compatible. Please, do not forget about credits :smiley:

Copyright 2015 - [José Cabo Carsí] - [LinkedIn] - folcwine@gmail.com

[LGPLv3]:http://www.gnu.org/copyleft/lesser.html
[José Cabo Carsí]:https://github.com/Bloodsucker
[LinkedIn]:https://es.linkedin.com/in/josecabo