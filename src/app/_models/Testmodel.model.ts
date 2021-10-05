 

export class Testmodel {

  objectuuid?: string;
createdat?: any;
updatedat?: any;
deletedat?: any;

  constructor(testmodel) {

    this.objectuuid = testmodel.objectuuid
this.createdat = testmodel.createdat
this.updatedat = testmodel.updatedat
this.deletedat = testmodel.deletedat
  }

}
