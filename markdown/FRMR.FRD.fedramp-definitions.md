# FedRAMP FedRAMP Definitions

- **Release:** 25.08A
- **Published:** 2025-08-24  
- **Designator:** FRD
- **Description:** Initial release of compiled FedRAMP definitions as a standalone document.

## Front Matter

### Effective Date(s) & Overall Applicability

- **FedRAMP 20x**:
  - This release is effective **2025-06-01** for **20x**. 
  - These definitions apply to all FedRAMP 20x documents, standards, requirements, and other materials.

- **FedRAMP Rev5**:
  - This release is effective **2025-06-01** for **R5.FRD.WR**. 
  - These definitions apply to all FedRAMP Rev5 documents, standard, requirements, and other materials that have been included in updates to Rev5 under Balance Improvement Releases.


### Documentation Guidelines

The following FedRAMP documentation guidelines apply to this document:

- The capitalized key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [IETF RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119).
- FedRAMP-specific terms defined in [FRD-ALL (FedRAMP Definitions)](https://github.com/FedRAMP/docs/blob/main/markdown/FRMR.FRD.fedramp-definitions.md) are italicized throughout this document for reference.


## Background & Authority
- [FedRAMP Authorization Act (44 USC § 3608)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3609) requires that the Administrator of the General Services Administration shall &quot;establish a Government- wide program that provides a standardized, reusable approach to security assessment and authorization for cloud computing products and services that process unclassified information used by agencies&quot;

### Purpose

This document consolidates formal FedRAMP definitions for terms used in FedRAMP standards.

### Expected Outcomes

- All stakeholders will have a common understanding of key terms used in FedRAMP standards.

---

## Definitions

#### FRD-ALL-01

> **Federal Information**: Has the meaning from OMB Circular A-130 and any successor documents. As of Apr 2025, this means &quot;information created, collected, processed, maintained, disseminated, disclosed, or disposed of by or for the federal government, in any medium or form.&quot;
>
>  _Note: This typically does not include information that a cloud service provider produces outside of a government contract or agreement. Review FedRAMP&#x27;s Technical Assistance and consult qualified legal experts for additional assistance identifying federal information._
>
>  _[Reference: OMB Circular A-130](https://whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf)_

#### FRD-ALL-02

> **Information Resource**: Has the meaning from 44 USC § 3502 (6): &quot;information and related resources, such as personnel, equipment, funds, and information technology.&quot;
>
>  _Note: This applies to any aspect of the _cloud service offering_, both technical and managerial, including everything that makes up the business of the offering from organizational policies and procedures to hardware, software, and code._
>
>  _[Reference: 44 USC § 3502 (6)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)_

#### FRD-ALL-03

> **Handle**: Has the plain language meaning inclusive of any possible action taken with information, such as access, collect, control, create, display, disclose, disseminate, dispose, maintain, manipulate, process, receive, review, store, transmit, use... etc.

#### FRD-ALL-04

> **Likely**: A reasonable degree of probability based on context.

#### FRD-ALL-05

> **Third-party Information Resource**: Any _information resource_ that is not entirely included in the assessment for the _cloud service offering_ seeking authorization.

#### FRD-ALL-06

> **Cloud Service Offering**: A specific, packaged cloud computing product or service provided by a cloud service provider that can be used by a customer. FedRAMP assessment and authorization of the cloud computing product or service is based on the Minimum Assessment Standard.

#### FRD-ALL-07

> **Regularly**: Performing the activity on a consistent, predictable, and repeated basis, at set intervals, automatically if possible, following a documented plan. These intervals may vary as appropriate between different requirements.

#### FRD-ALL-08

> **Significant change**: Has the meaning given in NIST SP 800-37 Rev. 2 which is &quot;a change that is _likely_ to substantively affect the security or privacy posture of a system.&quot;
>
>  _[Reference: NIST SP 800-37 Rev. 2](https://csrc.nist.gov/pubs/sp/800/37/r2/final)_

#### FRD-ALL-09

> **Routine Recurring**: The type of _significant change_ that _regularly_ and routinely recurs as part of ongoing operations, vulnerability mitigation, or vulnerability remediation.

#### FRD-ALL-10

> **Adaptive**: The type of _significant change_ that does not routinely recur but does not introduce substantive potential security risks that need to be assessed in depth.
>
>  _Note: Adaptive changes typically require careful planning that focuses on engineering execution instead of customer adoption, can be verified with minor changes to existing automated validation procedures, and do not require large changes to operational procedures, deployment plans, or documentation._

#### FRD-ALL-11

> **Transformative**: The type of _significant change_ that introduces substantive potential security risks that are _likely_ to affect existing risk determinations and must be assessed in depth.
>
>  _Note: Transformative changes typically introduce major features or capabilities that may change how a customer uses the service (in whole or in part) and require extensive updates to security assessments, operational procedures, deployment plans, and documentation._

#### FRD-ALL-12

> **Impact Categorization**: The type of _significant change_ that is _likely_ to increase or decrease the impact level categorization for the entire cloud service offering (e.g. from low to moderate or from high to moderate).

#### FRD-ALL-13

> **Interim Requirement**: A temporary requirement included as part of a FedRAMP Pilot or Beta Test that will _likely_ be replaced, updated, or removed prior to the formal wide release of the requirement.

#### FRD-ALL-14

> **Authorization Package**: Has meaning from 44 USC § 3607 (b)(8) which is &quot;the essential information that can be used by an agency to determine whether to authorize the operation of an information system or the use of a designated set of common controls for all cloud computing products and services authorized by FedRAMP.&quot;
>
>  _Note: In FedRAMP documentation, _authorization package_ always refers to a FedRAMP _authorization package_ unless otherwise specified._
>
>  _[Reference: 44 USC § 3607 (b)(8)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap36-sec3607)_

#### FRD-ALL-15

> **Authorization data**: The collective information required by FedRAMP for initial and ongoing assessment and authorization of a _cloud service offering_, including the _authorization package_. 
>
>  _Note: In FedRAMP documentation, _authorization data_ always refers to FedRAMP _authorization data_ unless otherwise specified._

#### FRD-ALL-16

> **Trust Center**: A secure repository or service used by cloud service providers to store and share _authorization data_. _Trust centers_ are the complete and definitive source for _authorization data_ and must meet the requirements outlined in the FedRAMP _authorization data_ Sharing Standard to be FedRAMP-compatible.
>
>  _Note: In FedRAMP documentation, all references to _trust centers_ indicate FedRAMP-compatible _trust centers_ unless otherwise specified._

#### FRD-ALL-17

> **Machine-readable**: Has the meaning from 44 U.S. Code § 3502 (18) which is &quot;the term &quot;_machine-readable_&quot;, when used with respect to data, means data in a format that can be easily processed by a computer without human intervention while ensuring no semantic meaning is lost&quot;
>
>  _[Reference: 44 U.S. Code § 3502 (18)](https://www.govinfo.gov/app/details/USCODE-2023-title44/USCODE-2023-title44-chap35-subchapI-sec3502)_








