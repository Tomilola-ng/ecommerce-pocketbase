/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj5pap84uwo00rx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uay6pagg",
    "name": "slug",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "uqotwezlqds7m7j",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj5pap84uwo00rx")

  // remove
  collection.schema.removeField("uay6pagg")

  return dao.saveCollection(collection)
})
