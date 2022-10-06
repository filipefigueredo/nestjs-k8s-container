locals {
  default_tags = {
    environment = var.environment
    managed_by  = "terraform"
    status      = var.status
    category    = var.category
    owner       = var.owner
    product     = var.product
    country     = var.country
  }
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-${var.name}"
  location = var.location
  tags     = merge(var.extra_tags, local.default_tags)

  lifecycle {
    ignore_changes = [
      tags["created_at"],
      tags["updated_at"]
    ]
  }
}