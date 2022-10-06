variable "project" {
  description = "Name of the project to which the resources should be assigned."
  type        = string

  validation {
    condition     = can(coalesce(var.project))
    error_message = "The 'project' value is invalid. It must be a non-empty string."
  }
}

variable "location" {
  # For a complete list of available Azure regions run at cli:  
  # az account list-locations  --query "[].{displayName:displayName, location:name}" --output table
  description = "(Optional) The Azure Region where the resource should exist."
  type        = string
}


variable "environment" {
  description = "The environment in which the resource should be provisioned."
  type        = string
}


variable "status" {
  description = "(Optional) Indicates the resource state that can lead to post actions (either manually or automatically)."
  type        = string
}


variable "tags" {
  description = "A map of tags which should be assigned to the desired resource."
  type        = map(string)
  default     = {}

  validation {
    condition     = alltrue([for tag in var.tags : can(coalesce(tag))])
    error_message = "At least on tag value from 'tags' is invalid. They must be a non-empty string."
  }
}

variable "kubernetes_version" {
  description = "Version of Kubernetes specified when creating the AKS managed cluster."
  type        = string

  validation {
    condition     = can(coalesce(var.kubernetes_version))
    error_message = "The 'kubernetes_version' value is invalid. It must be a non-empty string."
  }
}
