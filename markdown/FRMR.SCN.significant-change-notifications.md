# FedRAMP Significant Change Notification Requirements

- **Release:** 25.06A
- **Published:** 2025-06-16  
- **Designator:** SCN
- **Description:** Initial release of Significant Change Notification Requirements

## Front Matter

### Effective Date(s) & Overall Applicability

- **FedRAMP 20x**:
  - This release is effective **2025-06-16** for **20xP1**. 
  - These requirements apply to all participants in the FedRAMP 20x Phase One pilot.
  - Key Security Indicators for Configuration Management (KSI-CMT) should be updated in alignment with the Significant Change Notification Standard.    

- **FedRAMP Rev5**:
  - This release is effective **2025-07-07** for **R5.SCN.B1** _(tentatively)_. 
  - These requirements will be initially tested and evaluated for Rev5 in the SCN Closed Beta (B1).
  - Providers MUST participate in a Balance Improvement Test to transition from the Significant Change Request process to the new Significant Change Notification process prior to wide release of this process for Rev5. Providers should participate in the FedRAMP Rev5 Community Working Group at https://www.fedramp.gov/community/ to follow this process.    



## Background & Authority
- [FedRAMP Authorization Act (44 USC § 3609 (a) (7))](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) directs the Administrator of the General Services Administration to &quot;coordinate with the FedRAMP Board, the Director of the Cybersecurity and Infrastructure Security Agency, and other entities identified by the Administrator, with the concurrence of the [OMB] Director and the [DHS] Secretary, to establish and regularly update a framework for continuous monitoring...&quot;  

  ([This responsibility is delegated to the FedRAMP Director](https://www.gsa.gov/directives-library/gsa-delegations-of-authority-fedramp).)
- [OMB Memorandum M-24-15 on Modernizing FedRAMP](https://www.fedramp.gov/assets/resources/documents/FedRAMP_Policy_Memo.pdf) section VI states &quot;FedRAMP should seek input from CSPs and develop processes that enable CSPs to maintain an agile deployment lifecycle that does not require advance Government approval, while giving the Government the visibility and information it needs to maintain ongoing confidence in the FedRAMP-authorized system and to respond timely and appropriately to incidents.&quot;  

  ([This responsibility is delegated to the FedRAMP PMO Director](https://www.gsa.gov/fedramp/about-federal-risk-and-authorizations-management-program-fedramp/fedramp-pmo-director).)

### Purpose

The Significant Change Notification (SCN) standard establishes conditions for FedRAMP authorized cloud service providers to make most significant changes without requiring advance government approval. Agency authorizing officials who authorize the use of FedRAMP authorized cloud services are expected to account for the risk of cloud service providers making changes to improve the service.

This standard broadly identifies four types of significant changes, from least impactful to most impactful:
1. Routine Recurring
2. Adaptive
3. Transformative
4. Impact Categorization

These categories, and the resulting requirements, apply only to significant changes.

### Expected Outcomes

- Cloud service providers will securely deliver new features and capabilities for government customers at the same speed and pace of delivery for commercial customers, without needing advance government approval
- Federal agencies will have equal access to features and capabilities as commercial customers without sacrificing the visibility and information they need to maintain ongoing confidence in the service

---

## Definitions

#### FRD-SCN-01

> **Significant Change**: Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is likely to SUBSTANTIVELY affect the security or privacy posture of a system.&quot;
>
>  _[Reference: NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)_
#### FRD-SCN-02

> **Routine Recurring**: The type of significant change that routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.
#### FRD-SCN-03

> **Adaptive**: The type of significant change that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.
>
>  _Note: Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation._
#### FRD-SCN-04

> **Transformative**: The type of significant change that introduces substantive potential security risks that are likely to affect existing risk determinations and must be assessed in depth.
>
>  _Note: Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation._
#### FRD-SCN-05

> **Impact Categorization**: The type of significant change that is likely to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).
#### FRD-SCN-06

> **Interim Requirement**: A temporary requirement included as part of a FedRAMP Pilot or Beta Test that will likely be replaced, updated, or removed prior to the formal wide release of the requirement.

## Requirements

### FRR-SCN

**These requirements apply ALWAYS to ALL significant changes based on current Effective Date(s) and Overall Applicability.**

#### FRR-SCN-01

> Providers MUST notify all necessary parties when Significant Change Notifications are required, including at least FedRAMP and all agency customers. Providers MAY share Significant Change Notifications publicly or with other parties.

#### FRR-SCN-02

> Providers MUST follow the procedures documented in their security plan to plan, evaluate, test, perform, assess, and document changes.

#### FRR-SCN-03

> Providers MUST evaluate and type label all significant changes, then follow FedRAMP requirements for the type.

#### FRR-SCN-04

> Providers MUST maintain auditable records of these activities and make them available to all necessary parties.

#### FRR-SCN-05

> Providers MUST keep historical Significant Change Notifications available to all necessary parties at least until the service completes its next annual assessment.

#### FRR-SCN-06

> All parties SHOULD follow FedRAMP&#x27;s best practices and technical assistance on significant change assessment and notification where applicable.

#### FRR-SCN-07

> Providers MAY notify necessary parties in a variety of ways as long as the mechanism for notification is clearly documented and easily accessible.

#### FRR-SCN-08

> Providers MUST make ALL Significant Change Notifications and related audit records available in similar human-readable and compatible machine-readable formats.

#### FRR-SCN-09

> Providers MUST include at least the following information in Significant Change Notifications:
> - Service Offering FedRAMP ID
> - 3PAO Name (if applicable)
> - Related POA&amp;M (if applicable)
> - Short description of change
> - Reason for change
> - Summary of customer impact, including changes to services and customer configuration responsibilities
> - Plan and timeline for the change, including for the verification, assessment, and/or validation of impacted Key Security Indicators or controls
> - Copy of the business or security impact analysis
> - Name and title of approver

#### FRR-SCN-10

> Providers MAY include additional relevant information in Significant Change Notifications.
---   
### FRR-SCN-EX

**These exceptions MAY override some or all of the FedRAMP requirements for this standard.**

#### FRR-SCN-EX-01

> Providers MAY be required to delay significant changes beyond the standard Significant Change Notification period and/or submit significant changes for approval in advance as a condition of a formal FedRAMP Corrective Action Plan or other agreement.

#### FRR-SCN-EX-02

> Providers MAY execute significant changes (including TRANSFORMATIVE changes) during an emergency or incident without meeting Significant Change Notification requirements in advance ONLY if absolutely necessary. In such emergencies, providers MUST follow all relevant procedures, notify all necessary parties, retroactively provide all Significant Change Notification materials, and complete appropriate assessment after the incident.
---   
### FRR-SCN-RR

**These requirements apply ONLY to significant changes of type ROUTINE RECURRING.**

#### FRR-SCN-RR-01

> Providers SHOULD NOT make formal Significant Change Notifications for ROUTINE RECURRING changes; this type of change is exempted from the notification requirements of this standard.
---   
### FRR-SCN-AD

**These requirements apply ONLY to significant changes of type ADAPTIVE.**

#### FRR-SCN-AD-01

> Providers MUST notify all necessary parties within ten business days AFTER finishing ADAPTIVE changes, also including the following information:
> - Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)
---   
### FRR-SCN-TF

**These requirements apply ONLY to significant changes of type TRANSFORMATIVE.**

#### FRR-SCN-TF-01

> Providers SHOULD engage a third-party assessor to review the scope and impact of the planned change BEFORE starting TRANSFORMATIVE changes if human validation is necessary. This review SHOULD be limited to security decisions that require human validation. Providers MUST document this decision and justification.

#### FRR-SCN-TF-02

> Providers MUST notify all necessary parties of initial plans for TRANSFORMATIVE changes at least 30 business days BEFORE starting TRANSFORMATIVE changes.

#### FRR-SCN-TF-03

> Providers MUST notify all necessary parties of final plans for TRANSFORMATIVE changes at least 10 business days BEFORE starting TRANSFORMATIVE changes.

#### FRR-SCN-TF-04

> Providers MUST notify all necessary parties within 5 business days AFTER finishing TRANSFORMATIVE changes, also including the following information:
> - Updates to all previously sent information

#### FRR-SCN-TF-05

> Providers MUST notify all necessary parties within 5 business days AFTER completing the verification, assessment, and/or validation of TRANSFORMATIVE changes, also including the following information:
> - Updates to all previously sent information
> - Summary of any new risks identified and/or POA&amp;Ms resulting from the change (if applicable)
> - Copy of the security assessment report (if applicable)

#### FRR-SCN-TF-06

> Providers MUST publish updated service documentation and other materials to reflect TRANSFORMATIVE changes within 30 business days AFTER finishing TRANSFORMATIVE changes.

#### FRR-SCN-TF-07

> Providers MUST allow agency customers to OPT OUT of TRANSFORMATIVE changes whenever feasible.
---   
### FRR-SCN-IM

**These requirements apply ONLY to significant changes of type IMPACT CATEGORIZATION.**

#### FRR-SCN-IM-01

> Providers MUST follow the legacy Significant Change Request process or full re-authorization for IMPACT CATEGORIZATION changes, with advance approval from an identified lead agency, until further notice.
---   


