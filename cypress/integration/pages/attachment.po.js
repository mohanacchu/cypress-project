class Attachment {

  /**
   * * open selected files tab
   */
  openSelectedFilesTab() {
    cy.get('#tab1').click({
      force: true
    });
  }

  /**
   * * open from local tab
   */
  openFromLocalTab() {
    cy.get('#tab2').click({
      force: true
    });
  }

  /**
   * * open documents tab
   */
  openDocumentsTab() {
    cy.get('#tab3').click({
      force: true
    });
  }

  /**
   * * open albums tab
   */
  openAlbumsTab() {
    cy.get('#tab4').click({
      force: true
    });
  }

  /**
   * * open drawings tab
   */
  openDrawingsTab() {
    cy.get('#tab5').click({
      force: true
    });
  }

  /**
   * * get selected files
   */
  getSelectedFiles() {}

  /**
   * * select file from local system
   */
  selectFromLocal() {}

  /**
   * * select file from document
   */
  selectFromDocuments() {}

  /**
   * * select file from albums
   */
  selectFromAlbums() {}

  /**
   * * select file from drawing
   */
  selectFromDrawings() {}
}

export default Attachment;
