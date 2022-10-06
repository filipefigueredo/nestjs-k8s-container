module "resource_group" {
  source      = "./modules/resource_group"
  name        = var.project
  location    = var.location
  environment = var.environment
  status      = var.status
}

resource "azurerm_kubernetes_cluster" "k8s" {
  name                = "clu-${var.project}"
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name
  dns_prefix          = var.project

  default_node_pool {
    name                  = "main"
    enable_auto_scaling   = true
    enable_node_public_ip = false
    node_taints           = []
    tags                  = module.resource_group.tags
    node_count            = 1
    min_count             = 1
    max_count             = 10
    max_pods              = 120
    type                  = "VirtualMachineScaleSets"
    vm_size               = "Standard_DS2_v2"
    zones                 = ["1", "2", "3"]
    os_sku                = "Ubuntu"
    orchestrator_version  = var.kubernetes_version
  }

  identity {
    type = "SystemAssigned"
  }

  kubernetes_version = var.kubernetes_version
  tags               = module.resource_group.tags

  lifecycle {
    ignore_changes = [
      default_node_pool[0].node_count
    ]
  }
}
