# FedRAMP FedRAMP 20x Combined Requirements

- **Release:** 25.06A
- **Published:** 2025-06-17  
- **Designator:** FRMR-LOW
- **Description:** Combined FedRAMP 20x Low Requirements

---

## Definitions

#### FRD-SCN-01

> **Significant change**: Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is _likely_ to substantively affect the security or privacy posture of a system.&quot;
>
>  _[Reference: NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)_
#### FRD-SCN-02

> **Routine Recurring**: The type of _significant change_ that _regularly_ and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.
#### FRD-SCN-03

> **Adaptive**: The type of _significant change_ that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.
>
>  _Note: Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation._
#### FRD-SCN-04

> **Transformative**: The type of _significant change_ that introduces substantive potential security risks that are _likely_ to affect existing risk determinations and must be assessed in depth.
>
>  _Note: Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation._
#### FRD-SCN-05

> **Impact Categorization**: The type of _significant change_ that is _likely_ to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).
#### FRD-SCN-06

> **Interim Requirement**: A temporary requirement included as part of a FedRAMP Pilot or Beta Test that will _likely_ be replaced, updated, or removed prior to the formal wide release of the requirement.
#### FRD-MAS-01

> **Federal Information**: Has the meaning from OMB Circular A-130 and any successor documents. As of Apr 2025, this means &quot;information created, collected, processed, maintained, disseminated, disclosed, or disposed of by or for the federal government, in any medium or form.&quot;
>
>  _Note: This typically does not include information that a cloud service provider produces outside of a government contract or agreement. Review FedRAMP&#x27;s Technical Assistance and consult qualified legal experts for additional assistance identifying federal information._
>
>  _[Reference: OMB Circular A-130](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf)_
#### FRD-MAS-02

> **Information Resource**: Has the meaning from 44 USC § 3502 (6): &quot;information and related resources, such as personnel, equipment, funds, and information technology.&quot;
>
>  _Note: This applies to any aspect of the _cloud service offering_, both technical and managerial, including everything that makes up the business of the offering from organizational policies and procedures to hardware, software, and code._
>
>  _[Reference: 44 USC § 3502 (6)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)_
#### FRD-MAS-03

> **Handle**: Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.
#### FRD-MAS-04

> **Likely**: A reasonable degree of probability based on context.
#### FRD-MAS-05

> **Third-party Information Resource**: Any _information resource_ that is not entirely included in the assessment for the _cloud service offering_ seeking authorization.
#### FRD-MAS-06

> **Cloud Service Offering**: A specific, packaged cloud computing product or service provided by a cloud service provider that can be used by a customer. FedRAMP assessment and authorization of the cloud computing product or service is based on the Minimum Assessment Standard.
#### FRD-KSI-01

> **Regularly**: Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different requirements.

## Requirements

### FRR-SCN

**These requirements apply ALWAYS to ALL _significant changes_ based on current Effective Date(s) and Overall Applicability**

#### FRR-SCN-01

> Providers MUST notify all necessary parties when Significant Change Notifications are required, including at least FedRAMP and all agency customers. Providers MAY share Significant Change Notifications publicly or with other parties.

#### FRR-SCN-02

> Providers MUST follow the procedures documented in their security plan to plan, evaluate, test, perform, assess, and document changes.

#### FRR-SCN-03

> Providers MUST evaluate and type label all _significant changes_, then follow FedRAMP requirements for the type.

#### FRR-SCN-04

> Providers MUST maintain auditable records of these activities and make them available to all necessary parties.

#### FRR-SCN-05

> Providers MUST keep historical Significant Change Notifications available to all necessary parties at least until the service completes its next annual assessment.

#### FRR-SCN-06

> All parties SHOULD follow FedRAMP&#x27;s best practices and technical assistance on _significant change_ assessment and notification where applicable.

#### FRR-SCN-07

> Providers MAY notify necessary parties in a variety of ways as long as the mechanism for notification is clearly documented and easily accessible.

#### FRR-SCN-08

> Providers MUST make ALL Significant Change Notifications and related audit records available in similar human-readable and compatible machine-readable formats.

#### FRR-SCN-09

> Providers MUST include at least the following information in Significant Change Notifications:
> 1. Service Offering FedRAMP ID
> 1. 3PAO Name (if applicable)
> 1. Related POA&amp;M (if applicable)
> 1. Significant Change type and explanation of categorization
> 1. Short description of change
> 1. Reason for change
> 1. Summary of customer impact, including changes to services and customer configuration responsibilities
> 1. Plan and timeline for the change, including for the verification, assessment, and/or validation of impacted Key Security Indicators or controls
> 1. Copy of the business or security impact analysis
> 1. Name and title of approver

#### FRR-SCN-10

> Providers MAY include additional relevant information in Significant Change Notifications.
---   
### FRR-SCN-EX

**These exceptions MAY override some or all of the FedRAMP requirements for this standard.**

#### FRR-SCN-EX-01

> Providers MAY be required to delay _significant changes_ beyond the standard Significant Change Notification period and/or submit _significant changes_ for approval in advance as a condition of a formal FedRAMP Corrective Action Plan or other agreement.

#### FRR-SCN-EX-02

> Providers MAY execute _significant changes_ (including _transformative_ changes) during an emergency or incident without meeting Significant Change Notification requirements in advance ONLY if absolutely necessary. In such emergencies, providers MUST follow all relevant procedures, notify all necessary parties, retroactively provide all Significant Change Notification materials, and complete appropriate assessment after the incident.
---   
### FRR-SCN-RR

**These requirements apply ONLY to _significant changes_ of type _routine recurring_.**

#### FRR-SCN-RR-01

> Providers SHOULD NOT make formal Significant Change Notifications for _routine recurring_ changes; this type of change is exempted from the notification requirements of this standard.
---   
### FRR-SCN-AD

**These requirements apply ONLY to _significant changes_ of type _adaptive_.**

#### FRR-SCN-AD-01

> Providers MUST notify all necessary parties within ten business days after finishing _adaptive_ changes, also including the following information:
> 1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)
---   
### FRR-SCN-TF

**These requirements apply ONLY to _significant changes_ of type _transformative_.**

#### FRR-SCN-TF-01

> Providers SHOULD engage a third-party assessor to review the scope and impact of the planned change before starting _transformative_ changes if human validation is necessary. This review SHOULD be limited to security decisions that require human validation. Providers MUST document this decision and justification.

#### FRR-SCN-TF-02

> Providers MUST notify all necessary parties of initial plans for _transformative_ changes at least 30 business days before starting _transformative_ changes.

#### FRR-SCN-TF-03

> Providers MUST notify all necessary parties of final plans for _transformative_ changes at least 10 business days before starting _transformative_ changes.

#### FRR-SCN-TF-04

> Providers MUST notify all necessary parties within 5 business days after finishing _transformative_ changes, also including the following information:
> 1. Updates to all previously sent information

#### FRR-SCN-TF-05

> Providers MUST notify all necessary parties within 5 business days after completing the verification, assessment, and/or validation of _transformative_ changes, also including the following information:
> 1. Updates to all previously sent information
> 1. Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)
> 1. Copy of the security assessment report (if applicable)

#### FRR-SCN-TF-06

> Providers MUST publish updated service documentation and other materials to reflect _transformative_ changes within 30 business days after finishing _transformative_ changes.

#### FRR-SCN-TF-07

> Providers MUST allow agency customers to OPT OUT of _transformative_ changes whenever feasible.
---   
### FRR-SCN-IM

**These requirements apply ONLY to _significant changes_ of type _impact categorization_.**

#### FRR-SCN-IM-01

> Providers MUST follow the legacy Significant Change Request process or full re-authorization for _impact categorization_ changes, with advance approval from an identified lead agency, until further notice.
---   
### FRR-MAS

**These requirements apply ALWAYS to ALL FedRAMP authorizations based on the Effective Date(s) and Overall Applicability.**

#### FRR-MAS-01

> Providers MUST identify a set of _information resources_ to assess for FedRAMP authorization that includes all _information resources_ that are likely to _handle_ _federal information_ or _likely_ to impact the confidentiality, integrity, or availability of _federal information_ _handled_ by the _cloud service offering_.

#### FRR-MAS-02

> Providers MUST include the configuration and usage of _third-party information resources_, ONLY IF _FRR-MAS-01_ APPLIES.

#### FRR-MAS-03

> Providers MUST clearly identify and document the justification, mitigation measures, compensating controls, and potential impact to _federal information_ from the configuration and usage of non-FedRAMP authorized _third-party information resources_, ONLY IF _FRR-MAS-01_ APPLIES.

#### FRR-MAS-04

> Providers MUST include metadata (including metadata about _federal information_), ONLY IF _FRR-MAS-01_ APPLIES.

#### FRR-MAS-05

> Providers MUST clearly identify, document, and explain information flows and impact levels for ALL _information resources_, ONLY IF _FRR-MAS-01_ APPLIES.
---   
### FRR-MAS-EX

**These exceptions MAY override some or all of the FedRAMP requirements for this standard.**

#### FRR-MAS-EX-01

> Providers MAY include documentation of _information resources_ beyond the _cloud service offering, or even entirely outside the scope of FedRAMP, in a FedRAMP assessment and authorization package supplement; these resources will not be FedRAMP authorized and MUST be clearly marked and separated from the _cloud service offering_.
---   
### FRR-MAS-AY

**These rules provide general guidance on the application of this standard.**

#### FRR-MAS-AY-01

> Certain categories of cloud computing products and services are specified as entirely outside the scope of FedRAMP by the Director of the Office of Management and Budget. All such products and services are therefore not included in the _cloud service offering_ for FedRAMP. For more, see fedramp.gov/scope.

#### FRR-MAS-AY-02

> Software produced by cloud service providers that is delivered separately for installation on agency systems and not operated in a shared responsibility model (typically including agents, application clients, mobile applications, etc. that are not fully managed by the cloud service provider) is not a cloud computing product or service and is entirely outside the scope of FedRAMP under the FedRAMP Authorization Act. All such software is therefore not included in the _cloud service offering_ for FedRAMP. For more, see fedramp.gov/scope.

#### FRR-MAS-AY-03

> _Information resources_ (including _third-party information resources_) that do not meet the conditions in FRR-MAS-01 are not included in the _cloud service offering_ for FedRAMP(_FRR-MAS-02_).

#### FRR-MAS-AY-04

> _Information resources_ (including _third-party information resources_+_) MAY vary by impact level as appropriate to the level of information _handled_ or impacted by the information resource (_FRR-MAS-05_).

#### FRR-MAS-AY-05

> All parties SHOULD review best practices and technical assistance provided separately by FedRAMP for help with applying the Minimum Assessment Standard as needed.

#### FRR-MAS-AY-06

> All aspects of the _cloud service offering_ are determined and maintained by the cloud service provider in accordance with related FedRAMP authorization requirements and documented by the cloud service provider in their assessment and authorization materials.
---   
### FRR-KSI

**These requirements apply ALWAYS to ALL FedRAMP 20x authorizations based on the Effective Date(s) and Overall Applicability.**

#### FRR-KSI-01

> Cloud service providers MUST apply ALL Key Security Indicators to ALL aspects of their cloud service offering that are within the FedRAMP Minimum Assessment Scope.

#### FRR-KSI-02

> All parties SHOULD follow FedRAMP&#x27;s best practices and technical assistance on assessing Key Security Indicators where applicable.

#### FRR-KSI-03

> All parties SHOULD continuously monitor and review materials in the FedRAMP 20x Phase One (20xP1) pilot requirements and the 20x Community Working Group. Additional details, interim best practices and technical assistance, answers to common questions, and more will be provided asynchronously during 20xP1.
---   


## Key Security Indicators
### KSI-CNA: Cloud Native Architecture

**A secure cloud service offering will use cloud native architecture and design principles to enforce and enhance the Confidentiality, Integrity and Availability of the system.**

#### KSI-CNA-01
> Configure ALL information resources to limit inbound and outbound traffic.

#### KSI-CNA-02
> Design systems to minimize the attack surface and minimize lateral movement if compromised.

#### KSI-CNA-03
> Use logical networking and related capabilities to enforce traffic flow controls.

#### KSI-CNA-04
> Use immutable infrastructure with strictly defined functionality and privileges by default.

#### KSI-CNA-05
> Have denial of service protection.

#### KSI-CNA-06
> Design systems for high availability and rapid recovery.

#### KSI-CNA-07
> Ensure cloud-native information resources are implemented based on host provider&#x27;s best practices and documented guidance.

### KSI-SVC: Service Configuration

**A secure cloud service offering will follow FedRAMP encryption policies, continuously verify information resource integrity, and restrict access to third-party information resources.**

#### KSI-SVC-01
> Harden and review network and system configurations.

#### KSI-SVC-02
> Encrypt or otherwise secure network traffic.

#### KSI-SVC-03
> Encrypt all federal and sensitive information at rest.

#### KSI-SVC-04
> Manage configuration centrally.

#### KSI-SVC-05
> Enforce system and information resource integrity through cryptographic means.

#### KSI-SVC-06
> Use automated key management systems to manage, protect, and _regularly_ rotate digital keys and certificates.

#### KSI-SVC-07
> Use a consistent, risk-informed approach for applying security patches.

### KSI-IAM: Identity and Access Management

**A secure cloud service offering will use modern identity management principles to control access to information resources.**

#### KSI-IAM-01
> Use centrally managed authentication and authorization.

#### KSI-IAM-02
> Control access based on roles and cloud-native functions.

#### KSI-IAM-03
> Enforce minimum password and authentication requirements.

#### KSI-IAM-04
> Manage and protect privileged accounts.

#### KSI-IAM-05
> _Regularly_ review and validate access.

### KSI-AUD: Audit Logging

**A secure cloud service offering will maintain detailed audit logs of system and user activity.**

#### KSI-AUD-01
> Enable and configure detailed audit logging.

#### KSI-AUD-02
> Protect audit logs from tampering and deletion.

#### KSI-AUD-03
> Monitor audit logs for suspicious activity.

#### KSI-AUD-04
> Retain audit logs according to requirements.

### KSI-CMT: Configuration Management

**A secure cloud service offering will use configuration management best practices to maintain system security.**

#### KSI-CMT-01
> Use infrastructure-as-code to deploy and manage infrastructure.

#### KSI-CMT-02
> Track and document configuration changes.

#### KSI-CMT-03
> Review and validate configuration changes.

#### KSI-CMT-04
> Use configuration management for all system components.

### KSI-MON: Continuous Monitoring

**A secure cloud service offering will continuously monitor system health and security.**

#### KSI-MON-01
> Monitor system performance and availability.

#### KSI-MON-02
> Monitor security events and alerts.

#### KSI-MON-03
> Use automated monitoring tools.

#### KSI-MON-04
> _Regularly_ review monitoring data.

### KSI-VLN: Vulnerability Management

**A secure cloud service offering will actively manage and remediate vulnerabilities.**

#### KSI-VLN-01
> _Regularly_ scan for vulnerabilities.

#### KSI-VLN-02
> Track and remediate identified vulnerabilities.

#### KSI-VLN-03
> Use automated vulnerability scanning tools.

#### KSI-VLN-04
> Maintain vulnerability management program.

### KSI-INC: Incident Reporting

**A secure cloud service offering will have procedures in place to report and respond to security incidents.**

#### KSI-INC-01
> Maintain incident response procedures.

#### KSI-INC-02
> Report security incidents promptly.

#### KSI-INC-03
> Document and track incident responses.

#### KSI-INC-04
> Review and update incident response procedures.



# Technical assistance

### FRA-SCN

**Purpose:** This Technical Assistance helps stakeholders evaluate and label _significant changes_ by type as required by _FRR-SCN-03_. This assistance is designed for the 20x Phase One Pilot and Rev5 Closed Beta Balance Improvement Test. The Significant Change Notification Requirements will be tested, evaluated, and improved in partnership with stakeholders based on real-world experience.

**Disclaimer:** Every cloud service provider is different, every architecture is different, and every environment is different. Best practices and technical assistance MUST NOT be used as a checklist. All examples are for discussion purposes ONLY.

****

#### FRA-SCN-03

Once a change has been identified as a _significant change_ in general, FedRAMP recommends next determining if a change is of the type _routine recurring_. If it is not, work down from the highest impact to lowest to identify the type of change.

1. Is it a _significant change_?
2. If it is, is it a _routine recurring_ change?
3. If it is not, is it an _impact categorization_ change?
4. If it is not, is it a _transformative_ change?
5. If it is not, then it is an _adaptive_ change.

---   

#### FRA-SCN-RR

Activities that match the _routine recurring_ _significant change_ type are performed _regularly_ and routinely by cloud service providers to address flaws or vulnerabilities, address incidents, and generally perform the typical maintenance and service delivery changes expected during day-to-day operations.

These changes leverage mature processes and capabilities to identify, mitigate, and remediate risks as part of the change. They are often entirely automated and may occur without human intervention, even though they have an impact on security of the service.

If the activity does not occur _regularly_ and routinely then it cannot be a _significant change_ of this type (e.g., replacing all physical firewalls to remediate a vulnerability is obviously not regular or routine).

##### Ongoing operations

Key Tests:

- Routine care and feeding by staff during normal duties
- No major impact to service availability
- Does not require executive approval

Examples:

- Provisioning or deprovisioning capacity to support service elasticity
- Changing or tuning performance configurations for instances or services
- Updating and maintaining operational handling of information flows and protection across physical and logical networks (e.g., updating firewall rules)
- Generating or refreshing API or access tokens
##### Vulnerability Management

Key Tests:

- Minor, incremental patching or updates
- Significant refactoring or migration process NOT required
- No breaking changes

Examples:

- Updating security service or endpoint signatures
- Routine patching of devices, operating systems, software or libraries
- Updating and deploying code that applies normal fixes and improvements as part of a regular development cycle
- Vulnerability remediation activity that simply replaces a known-bad component(s) with a better version of the exact same thing, running in the exact same way with no changes to processes
---   

#### FRA-SCN-TF

Activities that match the _transformative_ _significant change_ type are rare for a cloud service offering, adjusted for the size, scale, and complexity of the service. Small cloud service offerings may go years without _transformative_ changes, while hyperscale providers may release multiple _transformative_ changes per year.

##### Transformative changes

Key Tests:

- Alters the service risk profile or require new or significantly different actions to address customer responsibilities
- Requires significant new design, development and testing with discrete associated project planning, budget, marketing, etc.
- Requires extensive updates to security assessments, documentation, and how a large number of security requirements are met and validated

Examples:

- The addition, removal, or replacement of a critical third party service that handles a significant portion of information (e.g., IaaS change)
- Increasing the security categorization of a service within the offering that actively handles federal information (does NOT include impact change of entire offering - see impact categorization change)
- Replacement of underlying management planes or paradigm shift in workload orchestration (e.g., bare-metal servers or virtual machines to containers, migration to kubernetes)
- Datacenter migration where large amounts of federal information is moved across boundaries different from normal day-to-day operations
- Adding a new AI-based capability that impacts federal information in a different way than existing services or capabilities (such as integrating a new third-party service or training on federal information)
---   

#### FRA-SCN-AD

Activities that match the _adaptive_ _significant change_ type are a frequent and normal part of iteratively improving a service by deploying new functionality or modifying existing functionality in a way that is typically transparent to customers and does not introduce significant new security risks.

In general, most changes that do not happen _regularly_ will be _adaptive_ changes. This change type deliberately covers a wide range of activities in a way that requires assessment and consideration.

##### Service adjustments

Key Tests:

- Requires minimal changes to security plans or procedures
- Requires some careful planning and project management to implement, but does not rise to the level of planning required for transformative changes
- Requires verification of existing functionality and secure configuration after implementation

Examples:

- Updates to operating systems, containers, virtual machines, software or libraries with known breaking changes, complex steps, or service disruption
- Deploying larger than normal incremental feature improvements in code or libraries that are the work of multiple weeks of development efforts but are not considered a major new service
- Changing cryptographic modules where the new module meets the same standards and characteristics of the former
- Replacing a like-for-like component where some security plan or procedure adjustments are required (e.g., scanning tool or managed database swap)
- Adding models to existing approved AI services without exposing federal information to new services
---   
