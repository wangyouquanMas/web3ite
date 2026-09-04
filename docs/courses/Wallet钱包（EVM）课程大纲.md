# Wallet 钱包（EVM）——15 天工程实战课程大纲

## 1. 课程定位

本课程实现一套面向 Ethereum、Base、BSC 等 EVM 网络的托管钱包与资产管理系统，支持原生币和 ERC-20，覆盖地址派生、资产账本、充值、提币、内部转账、资产归集、Gas Station、Nonce 管理、EIP-1559、交易签名、链重组、对账和生产安全。

课程强调：共享 EVM 执行模型不代表不同网络可以混账。每条网络都必须独立配置 Chain ID、RPC、确认深度、Gas 资产、Token 合约和风险参数。

```text
Web/App -> Gateway -> Account / Ledger
                       |       |
                       |       +-> Reconciliation
                       +-> Withdrawal Orchestrator
                                  |-> Nonce Manager
                                  |-> Fee Estimator
                                  |-> Risk / Policy
                                  |-> Sign Service
                                  |-> Multi-RPC Broadcaster

EVM Indexer -> Blocks + Logs + Traces -> Normalized Events -> Ledger
Sweep Engine / Gas Station -> Withdrawal Orchestrator
```

## 2. 学习目标

完成课程后，学员能够：

- 理解 EOA、Contract Account、交易、Receipt、Log 和 Internal Call；
- 以标准 BIP-44 路径派生 EVM 地址并隔离不同钱包用途；
- 统一管理 ETH、BNB 等原生币和不同网络的 ERC-20；
- 实现原生币与 ERC-20 充值索引、确认和 reorg 处理；
- 实现余额冻结、Nonce 分配、EIP-1559 手续费和安全提币；
- 实现 Token 归集、Gas 补充、交易替换和卡单恢复；
- 使用 KMS/HSM/MPC 或隔离 Sign Service 完成结构化交易签名；
- 完成链上、账本和业务订单三方对账；
- 在 RPC 超时、并发提币、重组和重复消息下保持资金安全。

## 3. 课程模块

| 模块 | 天数 | 主题 | 主要交付物 |
| --- | ---: | --- | --- |
| E1 | 1–2 | EVM 钱包基础与安全边界 | 架构图、资金流、威胁模型 |
| E2 | 3–4 | 地址派生与多网络抽象 | Wallet Service、Chain Registry |
| E3 | 5–6 | ERC-20 资产与复式账本 | Asset Registry、Ledger |
| E4 | 7–8 | 充值索引与链重组 | EVM Indexer、Reorg Handler |
| E5 | 9–10 | 提币、Nonce 与 EIP-1559 | Withdrawal、Nonce Manager |
| E6 | 11–12 | 归集、Gas Station 与签名 | Sweep Engine、Policy Signer |
| E7 | 13–15 | 对账、可靠性与上线 | 对账服务、压测、测试网项目 |

## 4. 每日课程设计

### Day 1：EVM 钱包与资金架构

- 托管钱包、非托管钱包、MPC 和 ERC-4337 Smart Account；
- Deposit、Hot Withdrawal、Sweep、Gas、Cold Wallet；
- 用户负债、平台链上资产和地址归属；
- Gateway、Account、Ledger、Indexer、Orchestrator、Signer；
- 实验：画出充值、提币、转账、归集和 Gas 补充资金流。

### Day 2：EVM 数据模型与威胁建模

- EOA、Contract、storage、calldata、Receipt、Log、Trace；
- Chain ID、nonce、signature、replay protection；
- 假 Token、重组、RPC 数据不一致、重放和私钥泄漏；
- 合约钱包、代理合约和 fee-on-transfer Token 的影响；
- 实验：建立至少 15 条威胁、资产不变量和缓解措施。

### Day 3：BIP-39/BIP-44 与 secp256k1

- Seed、Extended Key、派生路径 `m/44'/60'/0'/0/index`；
- 公钥、Keccak-256、EIP-55 checksum 地址；
- 地址索引、用途隔离和密钥轮换；
- Ethereum/Base/BSC 可以共享地址，但必须按网络独立记账；
- 实验：生成地址 golden vectors，并验证签名恢复地址。

### Day 4：Chain Registry 与钱包生命周期

- `chain_id`、network、native asset、RPC 和 confirmation policy；
- Address Codec、Balance Reader、Tx Builder、Fee Estimator、Broadcaster、Indexer；
- 并发地址分配、唯一约束、冻结、轮换和归档；
- 实验：注册 Ethereum、Base、BSC，输出能力矩阵和健康状态。

### Day 5：原生币、ERC-20 与 Asset Registry

- ETH/BNB 与 ERC-20 balance/allowance/decimals；
- `(chain_id, contract_address)` 是 Token 身份，Symbol 不是；
- 标准 ERC-20、无返回值 Token、fee-on-transfer、rebasing、proxy；
- 元数据白名单、恶意合约和精度污染；
- 实验：建立多网络 Asset Registry 并验证同 Symbol 不混账。

### Day 6：多资产复式账本与资产视图

- Journal、Entry、available、locked、pending 和 fee；
- 原始整数金额、decimals 仅用于展示；
- 充值、提币、退款、内部转账的平衡分录；
- 参考 `dex_full/apps/account` 的 EVM 余额和估值聚合；
- 实验：实现 `/assets` 和 `/portfolio`，返回余额、价格来源和更新时间。

### Day 7：原生币和 ERC-20 充值索引

- 区块、交易、Receipt 和 `Transfer` Log；
- 原生 ETH 转账与 Internal Call/Trace；
- Log Topic、logIndex 和合约地址校验；
- 事件唯一键：chain_id + tx_hash + log_index + asset_id；
- 实验：解析普通转账、同交易多 Log、合约内部原生币转账。

### Day 8：确认深度、Reorg 与断点补扫

- head、safe、finalized 和可配置 confirmation depth；
- parent hash 检测重组；
- WebSocket 用于通知，区块范围扫描保证完整性；
- orphaned 充值、冲正分录和已消费余额风险；
- 实验：模拟浅层 reorg、重复区块和 Indexer 宕机补扫。

### Day 9：提币订单、风控与余额冻结

- requested → approved → locked → signing → broadcast → confirming → completed；
- 幂等请求、2FA、新地址冷静期、单笔/单日限额；
- Token 提币数量、平台手续费、链上 Gas 和净到账；
- failed、dropped、replaced、unknown 的资金处理；
- 实验：重复 API 请求和队列重试不产生重复经济出金。

### Day 10：Nonce Manager 与 EIP-1559

- pending/latest nonce、同地址交易严格排序；
- 并发 nonce 分配、数据库租约和进程恢复；
- gas limit、base fee、priority fee、max fee；
- replacement、speed-up、cancel、underpriced 和 nonce gap；
- 实验：100 个并发请求 nonce 不重复；模拟卡单并用相同 nonce 替换。

### Day 11：ERC-20 转账与资产归集

- `transfer` calldata、gas estimation 和异常 Token 兼容；
- Deposit Address → Sweep Wallet → Cold Wallet；
- 最低归集额、dust、批量、速率限制；
- 归集只改变平台地址分布，不能增加用户余额；
- 实验：可重入 Sweep Job 在部分广播失败后安全恢复。

### Day 12：Gas Station 与安全签名

- Token 地址没有原生币时为什么不能归集；
- Gas 水位、补充额度、预算、回收和防薅 Gas；
- Sign Intent：chain ID、nonce、to、value、data、gas 上限、时效；
- EIP-155/2718/1559 签名与跨链重放保护；
- 实验：篡改 chain ID、to、value、calldata 或 Gas 时签名服务拒绝。

### Day 13：链上、账本与订单三方对账

- 地址链上余额、用户分户账、充值/提币/归集/Gas 订单；
- 未知链上支出、重复记账、nonce 占用和长时间 pending；
- 按网络、资产、钱包角色核算资产覆盖率；
- 实验：制造四类差异并生成可解释、可追踪的报告。

### Day 14：多 RPC、可靠性与可观测性

- RPC quorum、健康检查、速率限制和供应商切换；
- Indexer lag、reorg depth、nonce gap、replacement 和 Gas 预算指标；
- Inbox/Outbox、Dead Letter Queue、分布式追踪和审计；
- 实验：注入 timeout、错误 block hash、重复消息和 signer 暂停。

### Day 15：测试网端到端结课项目

完成以下闭环：

1. 为用户分配标准 EVM 地址；
2. 在两个 EVM 测试网充值原生币和 ERC-20；
3. 达到确认深度后幂等入账；
4. 完成站内转账和链上提币；
5. 触发 Token 归集与 Gas 补充；
6. 制造一次 reorg 和一次同 nonce 替换；
7. 完成三方对账并交付运行手册、安全报告和测试结果。

## 5. 核心数据模型

- `chains`：chain_id、network、native_asset、confirmations、RPC policy；
- `assets`：chain_id、contract、decimals、token behavior、status；
- `wallets`、`addresses`、`derivation_paths`；
- `ledger_accounts`、`ledger_journals`、`ledger_entries`；
- `deposits`：block hash/number、tx hash、log index、status；
- `withdrawals`：amount、fee、destination、idempotency key、status；
- `chain_transactions`：nonce、tx hash、replacement_of、fee params、status；
- `nonce_leases`、`sweep_jobs`、`gas_topups`、`signing_requests`；
- `risk_events`、`reconciliation_runs`、`reconciliation_differences`。

## 6. 关键不变量

1. 同一充值 Log 只能入账一次；
2. 同一提币请求最多造成一次经济出金；
3. 同一发送地址的 nonce 只能由一个协调器分配；
4. 广播超时或交易状态 unknown 时不能立即退款重发；
5. 不同 chain ID 或合约地址的同名 Token 不能合并；
6. 所有 Journal 借贷平衡，用户可用余额不能为负；
7. 归集和 Gas 补充不改变用户总负债；
8. 签名交易必须完全匹配审批后的结构化意图；
9. reorg 通过冲正分录处理，不能删除账本历史；
10. 平台资产覆盖率和所有差异必须可解释。

## 7. 项目参考

- `wallet_mvp/internal/chain/evm.go`：当前 EVM 原生币适配器基础；
- `wallet_mvp/internal/chain/registry.go`：Chain Registry；
- `wallet_mvp/internal/sign/wallet.go`：EVM 地址派生和消息签名；
- `wallet_mvp/internal/ledger/service.go`：现有余额账本及升级起点；
- `wallet_mvp/internal/risk/engine.go`：基础风控规则；
- `dex_full/apps/account/internal/svc/servicecontext.go`：Ethereum/Base/BSC 资产查询与估值；
- `dex_full/apps/account/account.proto`：钱包、资产和转账接口参考。

## 8. 验收标准

- 至少支持两个 EVM 网络、原生币和 ERC-20；
- 同 Symbol 跨网络或跨合约资产严格隔离；
- 充值重复、乱序、补扫和 reorg 不造成错误余额；
- 并发提币 nonce 不冲突，卡单可安全替换；
- 归集 Gas 补充具有额度、预算、防滥用和完整成本记录；
- 私钥不出安全边界，任意交易字节不能绕过 Policy；
- 测试网完成端到端演示，并生成零未解释差异的对账报告。
