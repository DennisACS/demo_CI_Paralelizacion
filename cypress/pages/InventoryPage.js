class InventoryPage{
    elements = {
        title: () => cy.get(".title"),
      };


}

export const inventoryPage = new InventoryPage();