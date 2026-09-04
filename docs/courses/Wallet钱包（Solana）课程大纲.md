# Wallet 钱包（Solana）——15 天工程实战课程大纲

## 1. 课程定位

本课程以 `wallet_mvp` 的 Solana 托管钱包为工程基线，实现一套支持 SOL、SPL Token 与 Token-2022 的生产型钱包后台。课程不止讲地址生成和转账，而是完整覆盖用户资产账本、充值、提币、站内转账、批量归集、Gas/rent 管理、交易签名、链上确认、对账和安全运维。

目标项目采用以下服务边界：

```text
Web/App -> Gateway -> Account / Ledger
                       |       |
                       |       +-> Reconciliation
                       +-> Transaction Orchestrator
                                  |-> Risk / Policy
                                  |-> Sign Service (KMS/HSM/MPC)
                                  |-> Solana RPC / Stream

Deposit Indexer -> Normalized Events -> Ledger
Sweep Engine / Gas Manager -> Transaction Orchestrator
```

## 2. 学习目标

完成课程后，学员能够：

- 理解 Solana Account Model、交易、指令、PDA、ATA 和 Program；
- 使用标准 Solana 派生路径管理多用户、多用途地址；
- 统一管理 SOL、SPL Token 和 Token-2022；
- 实现充值发现、确认、幂等入账和断点补扫；
- 实现提币冻结、交易构造、策略审批、安全签名、广播和确认；
- 实现热钱包补充、用户地址归集、rent 回收和 WSOL 处理；
- 区分链上地址余额与平台用户账本；
- 完成链上资产、内部账本和业务订单的三方对账；
- 在 RPC 超时、重复消息和服务重启下保持资产正确。

## 3. 课程模块

| 模块 | 天数 | 主题 | 主要交付物 |
| --- | ---: | --- | --- |
| S1 | 1–2 | Solana 钱包基础与安全边界 | 架构图、账户图、威胁模型 |
| S2 | 3–4 | 地址派生与钱包生命周期 | 地址服务、标准派生测试 |
| S3 | 5–6 | 多币种资产与复式账本 | Asset Registry、Ledger |
| S4 | 7–8 | 充值索引与最终性 | Deposit Indexer、补扫与幂等 |
| S5 | 9–10 | 提币与转账执行 | Withdrawal 状态机、交易构造器 |
| S6 | 11–12 | 归集、Gas/rent 与签名 | Sweep Engine、Policy Signer |
| S7 | 13–15 | 对账、可靠性与上线 | 对账服务、压测、Devnet 项目 |

## 4. 每日课程设计

### Day 1：Solana 钱包与资金架构

- 托管、非托管、MPC 和智能合约钱包；
- Funding、Deposit、Hot Withdrawal、Sweep、Cold Wallet；
- 用户资产负债与平台链上资产；
- Account、Sign、Trade、Watcher 的服务边界；
- 实验：画出充值、提币、转账、归集的资金流。

### Day 2：Solana 账户模型与威胁建模

- Account owner、Program、Instruction、CPI、PDA；
- System Account、Mint、Token Account、ATA；
- Writable/Signer 权限和账户替换风险；
- RPC 欺骗、私钥泄漏、重复入账、交易重放；
- 实验：建立至少 15 条威胁及对应防护措施。

### Day 3：HD Wallet、ed25519 与标准派生

- BIP-39 Seed、SLIP-0010、ed25519；
- Solana 常用派生路径和钱包兼容性；
- 地址索引、用途索引和密钥域隔离；
- 对比现有项目自定义派生算法与标准路径；
- 实验：生成 golden vectors，并使用第三方钱包验证可恢复性。

### Day 4：地址分配与生命周期

- 用户独立充值地址和地址池；
- 并发分配、唯一约束、钱包所有权；
- 启用、冻结、轮换、归档和恢复；
- 批量创建地址与派生索引冲突；
- 实验：100 并发请求下地址不重复、索引不丢失。

### Day 5：SOL、SPL Token 与 Token-2022

- Native SOL、Lamports、Wrapped SOL；
- Mint、ATA、Token Program 与 Associated Token Program；
- Token-2022 Extension：Transfer Fee、Transfer Hook、Default State 等；
- Token Program ID 必须来自链上账户，不能由前端指定；
- 实验：建立 `(network, token_program, mint)` 唯一的 Asset Registry。

### Day 6：多资产复式账本

- Journal、Entry、Ledger Account；
- available、locked、pending、fee、treasury；
- 金额使用整数最小单位，禁止浮点记账；
- 充值、提币、退款和站内转账的借贷分录；
- 实验：实现借贷平衡和业务幂等约束。

### Day 7：充值交易与指令解析

- System Transfer、SPL Transfer、TransferChecked；
- outer/inner instruction、pre/post token balance；
- 一笔交易内多次转账和多资产转账；
- 标准事件键：signature + instruction index + inner index + asset；
- 实验：解析 SOL、SPL 和 Token-2022 固定交易夹具。

### Day 8：Watcher、确认与断点补扫

- processed、confirmed、finalized 的使用边界；
- WebSocket/Stream 用于低延迟，slot/block 补扫用于完整性；
- 游标、乱序、重复通知和 RPC 限流；
- 先保存证据、再确认、最后入账；
- 实验：重放 10,000 次同一充值事件只入账一次，服务重启后自动补扫。

### Day 9：提币订单与余额冻结

- requested → risk_review → funds_locked → signing → broadcast → confirming → completed；
- client request id、防重、2FA、地址白名单和限额；
- 手续费预算、净到账与失败解冻；
- unknown 广播结果不能直接退款；
- 实验：重复请求和消费者重试不产生重复经济出金。

### Day 10：Solana 交易构造与发送

- recent blockhash、Message、Versioned Transaction 和 ALT；
- ATA 创建、Token transfer、WSOL sync/close；
- Compute Unit Limit、Priority Fee 和交易大小限制；
- blockhash 过期后安全重建与重新签名；
- 实验：离线解码交易并验证收款人、Mint、金额、Program 和费用上限。

### Day 11：资产归集与资金分层

- Deposit Address → Sweep Wallet → Cold Wallet；
- SOL 和 Token 的最小归集额、dust、批量和限频；
- ATA rent 成本、空 Token Account 关闭与租金回收；
- 归集只移动平台资产，不能触发用户二次入账；
- 实验：重复运行 Sweep Job 不重复发送，部分失败可恢复。

### Day 12：Gas/rent 管理与安全签名

- Token 地址为什么需要 SOL 支付交易费；
- Gas Top-up 水位、额度、单日预算和防滥用；
- Sign Intent：链、账户、Mint、金额、目标、Program、费用、时效；
- 业务服务不能读取助记词或私钥；
- 实验：篡改地址、Mint、金额和 Program ID 时签名服务必须拒绝。

### Day 13：链上、账本与订单三方对账

- 地址余额、用户分户账、充值/提币/归集订单；
- 未知链上支出、少记、多记、pending 超时和精度差异；
- 差异分类、冲正分录和人工工单；
- 实验：主动制造四类差异并生成可解释报告。

### Day 14：可靠性、监控与故障演练

- 多 RPC、健康检查、请求对冲和限流；
- Indexer lag、充值延迟、签名失败、卡单、热钱包水位；
- Inbox/Outbox、Dead Letter Queue 和告警；
- 实验：注入 RPC timeout、重复消息、服务重启和 blockhash 过期。

### Day 15：Devnet 端到端结课项目

完成以下闭环：

1. 注册并分配标准派生地址；
2. 充值 SOL、SPL Token 和一个 Token-2022 资产；
3. finalized 后幂等入账；
4. 完成站内转账和链上提币；
5. 触发 Token 归集、SOL 补充和 rent 回收；
6. 完成三方对账；
7. 输出测试、安全、运行和事故处理文档。

## 5. 核心数据模型

- `assets`：network、token_program、mint、decimals、extensions、status；
- `wallets`：role、custody_type、key_reference、status；
- `addresses`：user_id、wallet_id、derivation_path、address；
- `ledger_accounts`、`ledger_journals`、`ledger_entries`；
- `deposits`：signature、instruction indexes、slot、commitment、status；
- `withdrawals`：amount、fee、destination、status、idempotency key；
- `chain_transactions`：message hash、signature、blockhash、attempt、status；
- `sweep_jobs`、`gas_topups`、`signing_requests`、`risk_events`；
- `reconciliation_runs`、`reconciliation_differences`。

## 6. 关键不变量

1. 同一链上充值事件只能记账一次；
2. 同一提币请求最多造成一次经济出金；
3. 所有 Journal 借贷平衡；
4. 用户可用余额不能为负；
5. 归集和 Gas 补充不能增加用户余额；
6. Mint 或 Token Program 不同的资产不能合并；
7. 签名交易必须完全匹配已审批的 Sign Intent；
8. 广播状态未知时不能退款后重发；
9. 任何账本修正通过冲正分录完成，不能删除历史；
10. 平台必须始终能解释资产、负债和差异。

## 7. 项目参考

- `wallet_mvp/README.md`：当前 Solana devnet 产品边界；
- `wallet_mvp/internal/deposit/solana/`：充值监听和解析；
- `wallet_mvp/internal/deposit/processor.go`：幂等入账；
- `wallet_mvp/internal/sign/`：地址派生与签名；
- `wallet_mvp/internal/trade/`：交易构造与广播；
- `wallet_mvp/internal/risk/`：基础风险规则；
- `dex_full/apps/account`：资产查询、估值与用户钱包接口参考。

## 8. 验收标准

- 支持 SOL、SPL Token、Token-2022 的充值、提币和资产展示；
- 充值重复、乱序和服务重启不会重复入账；
- 提币超时、重复消费和重试不会重复出金；
- 归集、Gas 补充和 ATA/rent 成本可审计；
- 私钥不出安全边界，普通服务不能读取密钥；
- 可在 Devnet 演示完整流程，并生成零未解释差异的对账报告。
