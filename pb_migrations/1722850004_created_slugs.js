/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uqotwezlqds7m7j",
    "created": "2024-08-05 09:26:44.613Z",
    "updated": "2024-08-05 09:26:44.613Z",
    "name": "slugs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ophragcd",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uqotwezlqds7m7j");

  return dao.deleteCollection(collection);
})
